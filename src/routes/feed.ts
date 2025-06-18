import { Router } from "express";
import { authMiddleware } from "../utils/middleware";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { redisClient } from "../utils/redisClient";

const router = Router();
const prismaClient = new PrismaClient();

router.use(authMiddleware);

router.get("/getUnMatchedFeed/:page", async (req, res) => {
  //@ts-ignore
  const loggedInUser = req.userId;

  const page = req.params.page ? parseInt(req.params.page as string) : 1;

  const user = await prismaClient.user.findFirst({
    where: {
      id: loggedInUser,
    },
    include: {
      user_details: true,
    },
  });

  const interestsInGender = user?.user_details?.interested_in_gender;

  const usersPerPage = 10;

  const seenUsers = await redisClient.sMembers(`seen:${loggedInUser}`);

  const getAllUser = await prismaClient.user.findMany({
    where: {
      id: {
        notIn: [loggedInUser, ...seenUsers],
      },
      user_details: {
        is: {
          gender: interestsInGender?.toLocaleLowerCase(),
        },
      },
    },
    select: {
      id: true,
      email: true,
      user_details: true,
      preferences: true,
      media: true,
    },
    take: usersPerPage,
    skip: (page - 1) * usersPerPage,
  });

  if (getAllUser.length === 0) {
    res.status(200).json({
      message: "No match found!",
    });
    return;
  }

  res.status(200).json({
    user: getAllUser,
  });
});

export const feedRoutes = router;
