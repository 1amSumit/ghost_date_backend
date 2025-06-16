import { Router } from "express";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { authMiddleware } from "../utils/middleware";

const prismaClient = new PrismaClient();
const router = Router();

router.use(authMiddleware);

router.get("/get-users-message/:to_user/:page", async (req, res) => {
  const { to_user } = req.params;
  const page = req.params.page ? parseInt(req.params.page as string) : 1;

  const messagePerPage = 10;

  //@ts-ignore
  const from_user = req.userId;

  try {
    const messages = await prismaClient.message.findMany({
      where: {
        OR: [
          { message_from_user: from_user, message_to_user: to_user },
          { message_from_user: to_user, message_to_user: from_user },
        ],
      },
      select: {
        message_from_user: true,
        message_to_user: true,
        message: true,
        created_at: true,
        id: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: messagePerPage,
      skip: (page - 1) * messagePerPage,
    });

    res.status(200).json({
      messages,
    });
    return;
  } catch (Err) {
    console.log(Err);
    res.status(501).json({
      message: "Failed to get messages",
    });
    return;
  }
});

export const messageRouter = router;
