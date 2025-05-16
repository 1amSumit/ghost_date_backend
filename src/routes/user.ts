import { Router } from "express";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { userSinginTypes, userSingupTypes } from "../types";
import jwt from "jsonwebtoken";

const prismaClient = new PrismaClient();

const routes = Router();

routes.post("/signup", async (req, res) => {
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
      email: parsedData.data.email,
      password: parsedData.data.password,
      gender: parsedData.data.gender,
      bio: parsedData.data.bio,
      location: parsedData.data.location,
      date_of_birth: parsedData.data.dateOfBirth,
      created_at: new Date(),
      last_active: new Date(),
      profile_pic: parsedData.data.profilePic,
    },
  });

  res.status(200).json({
    user: newUser,
    message: "signup successfull",
  });
});

routes.post("/signin", async (req, res) => {
  const body = await req.body;
  const parsedData = userSinginTypes.safeParse(body);

  if (!parsedData.success) {
    res.status(411).json({
      message: "Invalid input",
    });
    return;
  }

  const userExists = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.email,
      password: parsedData.data.password,
    },
  });

  if (!userExists) {
    res.status(411).json({
      message: "User not exists. Please sign up first.",
    });

    return;
  }

  const token = jwt.sign(
    { id: userExists.id },
    process.env.JWT_PASSWORD as string,
    {
      expiresIn: 10 * 60 * 60,
    }
  );

  res.status(200).json({
    token,
    user: userExists,
  });
});

export const userRoutes = routes;
