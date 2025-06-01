import { Router } from "express";
import { authMiddleware } from "../utils/middleware";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { redisClient } from "../utils/redisClient";

const router = Router();
const prismaClient = new PrismaClient();

router.use(authMiddleware);

router.get("/getUnMatchedFeed/:page", async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const page = req.params.page ? parseInt(req.params.page as string) : 1;

  const usersPerPage = 10;

  const getAllUser = await prismaClient.user.findMany({
    where: {
      id: {
        not: userId,
      },
    },
    select: {
      id: true,
      email: true,
      user_details: true,
      preferences: true,
    },
    take: usersPerPage,
    skip: (page - 1) * usersPerPage,
  });

  // console.log(getAllUser.map((u) => u.email));

  if (getAllUser.length === 0) {
    res.status(200).json({
      message: "No match found!",
    });
    return;
  }

  const feed: any = [];

  for (const user of getAllUser) {
    const exists = await redisClient.get(user.id);

    if (exists === null) {
      feed.push(user);
    }
  }

  res.status(200).json({
    user: feed,
  });
});

export const feedRoutes = router;
