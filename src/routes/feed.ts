import { Router } from "express";
import { authMiddleware } from "../utils/middleware";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";

const router = Router();
const prismaClient = new PrismaClient();

router.use(authMiddleware);

//@ts-ignore
router.get("/getFeed", async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const getAllUser = await prismaClient.user.findMany({
    where: {
      id: {
        not: userId,
      },
    },
  });

  if (getAllUser.length === 0) {
    return res.status(200).json({
      message: "No match found!",
    });
  }

  res.status(200).json({
    user: getAllUser,
  });
});

export const feedRoutes = router;
