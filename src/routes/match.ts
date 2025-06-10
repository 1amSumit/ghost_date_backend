import { Router } from "express";
import { authMiddleware } from "../utils/middleware";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";

const router = Router();

const prismaClient = new PrismaClient();

router.use(authMiddleware);

router.post("/add-match", async (req, res) => {
  //@ts-ignore
  const loggedInUser = req.userId;
  const gotLikedBack = req.body.users;

  try {
    await Promise.all(
      gotLikedBack.map((userId: string) => {
        prismaClient.$transaction(async (tx) => {
          await tx.matches.create({
            data: {
              user1_id: loggedInUser,
              user2_id: userId,
              is_matched_at: new Date(),
              is_blocked: false,
            },
          });

          await tx.liked.delete({
            where: {
              liked_to_id_liked_by_id: {
                liked_by_id: userId,
                liked_to_id: loggedInUser,
              },
            },
          });
        });
      })
    );
    res.status(200).json({ message: "Matches added successfully" });
  } catch (err) {
    res.status(411).json({
      message: "Error matching the user",
    });
  }
});

export const matchRoutes = router;
