import { Router } from "express";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { userSingupTypes } from "../types";

const prismaClient = new PrismaClient();

const routes = Router();

routes.post("/", async (req, res) => {
  const body = await req.body;
  const parsedData = userSingupTypes.safeParse(body);

  if (!parsedData.success) {
    res.status(411).json({
      message: "Invalid input",
    });
    return;
  }

  const newUser = await prismaClient.user.create({
    data: {
      username: parsedData.data.username,
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });

  res.status(200).json({
    user: newUser,
    message: "signup successfull",
  });
});

export const userRoutes = routes;
