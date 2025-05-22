import { json, Router } from "express";
import { authMiddleware } from "../utils/middleware";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { redisClient } from "../utils/redisClient";

const router = Router();
const prismaClient = new PrismaClient();

router.use(authMiddleware);

//@ts-ignore
router.get("/getMatchedFeed", async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const getAllUser = await prismaClient.user.findMany({
    where: {
      id: {
        not: userId,
      },
    },
    include: {
      user_details: true,
      preferences: true,
    },
  });

  if (getAllUser.length === 0) {
    return res.status(200).json({
      message: "No match found!",
    });
  }

  const feed: any = [];

  for (const user of getAllUser) {
    const exists = await redisClient.get(user.id);

    if (exists === null) {
      feed.push(user);
      await redisClient.set(user.id, JSON.stringify(user), {
        EX: 3600,
      });
    }
  }

  res.status(200).json({
    user: feed,
  });
});

export const feedRoutes = router;
