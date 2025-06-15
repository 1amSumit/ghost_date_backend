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

  console.log(gotLikedBack);

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
    console.log(err);
    res.status(411).json({
      message: "Error matching the user",
    });
  }
});

router.get("/get-user-match", async (req, res) => {
  //@ts-ignore
  const loggedInUser = req.userId;

  if (!loggedInUser) {
    res.status(404).json({
      message: "UnAuthorized",
    });
  }

  try {
    const matchedUsers = await prismaClient.matches.findMany({
      where: {
        OR: [{ user1_id: loggedInUser }, { user2_id: loggedInUser }],
      },
      include: {
        user1: {
          include: {
            user_details: true,
          },
        },
        user2: {
          include: {
            user_details: true,
          },
        },
      },
    });

    const result = matchedUsers.map((match) => {
      const matchedUser =
        match.user1_id === loggedInUser ? match.user2 : match.user1;

      return {
        match_id: match.id,
        matched_user_id: matchedUser.id,
        user_details: matchedUser.user_details,
      };
    });

    res.status(200).json({
      matchedUsers: result,
    });
  } catch (err) {
    console.log(err);
    res.status(411).json({
      message: "Sever error",
    });
  }
});

export const matchRoutes = router;
