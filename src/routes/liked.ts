import { Router } from "express";
import { authMiddleware } from "../utils/middleware";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";

const router = Router();
const prismaClient = new PrismaClient();

router.use(authMiddleware);

router.post("/set-liked", async (req, res) => {
  //@ts-ignore
  const loggedInUser = req.userId;

  const { users } = req.body;

  try {
    users.forEach(async (user: string) => {
      await prismaClient.liked.create({
        data: {
          liked_to_id: user,
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
router.get("/get-liked-users", async (req, res) => {
  //@ts-ignore
  const loggedInUser = req.userId;

  try {
    const getUserWhoLiked = await prismaClient.liked.findMany({
      where: {
        liked_to_id: loggedInUser,
      },
      select: {
        id: true,
        liked_by: {
          include: {
            user_details: true,
            media: true,
            preferences: true,
          },
        },
      },
    });

    res.status(200).json({
      users: getUserWhoLiked,
    });
  } catch (error) {
    console.error("Error fetching liked users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export const likedUser = router;
