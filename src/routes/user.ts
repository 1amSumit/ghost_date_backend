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
      message: "Invalid inputt",
      erro: parsedData,
    });
    return;
  }

  await prismaClient.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: parsedData.data.email,
        password: parsedData.data.password,
      },
    });

    await tx.userDetail.create({
      data: {
        user_id: user.id,
        first_name: parsedData.data.firstName,
        last_name: parsedData.data.lastName,
        date_of_birth: parsedData.data.dateOfBirth,
        gender: parsedData.data.gender,
        bio: parsedData.data.bio,
        location: parsedData.data.location,
        latitude: parsedData.data.latitude,
        longitude: parsedData.data.longitude,
        pronounce: parsedData.data.pronounce,
        interested_in_gender: parsedData.data.interestedInGender,
        profile_pic: parsedData.data.profilePic,
        last_active: new Date(),
      },
    });

    await tx.userPreferences.create({
      data: {
        user_id: user.id,
        interests: parsedData.data.interests,
        prefered_min_age: parsedData.data.prefered_min_age,
        prefered_max_age: parsedData.data.prefered_max_age,
        max_distance: parsedData.data.max_distance,
        is_ghost_mode: parsedData.data.is_ghost_mode,
        show_on_feed: parsedData.data.show_on_feed,
        verified: parsedData.data.verified,
      },
    });
  });
  res.status(200).json({
    message: "User created successfully",
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
