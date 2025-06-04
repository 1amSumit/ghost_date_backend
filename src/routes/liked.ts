import { Router } from "express";
import { authMiddleware } from "../utils/middleware";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";

const router = Router();
const prismaClient = new PrismaClient();

router.post("/set-liked", authMiddleware, async (req, res) => {
  //@ts-ignore
  const loggedInUser = req.userId;

  const { users } = req.body;

  console.log(users);
  try {
    users.forEach(async (user: string) => {
      await prismaClient.liked.create({
        data: {
          user_id: user,
          liked_by_id: loggedInUser,
        },
      });
    });
  } catch (err) {
    res.status(501).json({
      message: "server error",
    });
  }

  res.status(200).json({
    message: "done",
  });
});

export const likedUser = router;
