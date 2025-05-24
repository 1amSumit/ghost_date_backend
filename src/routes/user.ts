import { Router } from "express";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { userSinginTypes, userSingupTypes, verifyOtpTypes } from "../types";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { redisClient } from "../utils/redisClient";
import { generateOtp } from "../utils/genereateOtp";
import { sendMail } from "../utils/sendEmail";

const prismaClient = new PrismaClient();

const routes = Router();

routes.post("/signup", async (req, res) => {
  const body = await req.body;
  const parsedData = userSingupTypes.safeParse(body);

  if (!parsedData.success) {
    res.status(411).json({
      message: "Invalid input",
      erro: parsedData,
    });
    return;
  }

  const exists = await redisClient.get(parsedData.data.email);

  if (exists !== null) {
    res.status(411).json({
      message: "already exists",
    });

    return;
  }

  const otp = generateOtp();

  await redisClient.set(parsedData.data.email, otp);
  await sendMail(parsedData.data.email, otp);

  res.status(200).json({
    message: "otp sent successfully",
  });
});

routes.post("/verify-otp", async (req, res) => {
  const body = req.body;
  const parsedData = verifyOtpTypes.safeParse(body);
  const getOtp = await redisClient.get(parsedData.data!.email);
  if (getOtp !== parsedData.data?.otp) {
    res.status(411).json({
      message: "incorrect otp",
    });
    return;
  }

  const hashedPassword = await bcrypt.hash(parsedData.data.password, 16);
  await redisClient.del(parsedData.data.email);

  const user = await prismaClient.user.create({
    data: {
      email: parsedData.data.email,
      password: hashedPassword,
    },
  });

  await redisClient.set(parsedData.data.email, user.id);

  res.status(200).json({
    user: user.id,
    message: "user created successfully",
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

// routes.post("/userDetails", async (req, res) => {

//   await tx.userDetail.create({
//     data: {
//       user_id: user.id,
//       first_name: parsedData.data.firstName,
//       last_name: parsedData.data.lastName,
//       date_of_birth: parsedData.data.dateOfBirth,
//       gender: parsedData.data.gender,
//       bio: parsedData.data.bio,
//       location: parsedData.data.location,
//       latitude: parsedData.data.latitude,
//       longitude: parsedData.data.longitude,
//       pronounce: parsedData.data.pronounce,
//       interested_in_gender: parsedData.data.interestedInGender,
//       profile_pic: parsedData.data.profilePic,
//       height: parsedData.data.height,
//       education: parsedData.data.education,
//       howyoudie: parsedData.data.howyoudie,
//       last_active: new Date(),
//     },
//   });

//   await tx.userPreferences.create({
//     data: {
//       user_id: user.id,
//       interests: parsedData.data.interests,
//       prefered_min_age: parsedData.data.prefered_min_age,
//       prefered_max_age: parsedData.data.prefered_max_age,
//       max_distance: parsedData.data.max_distance,
//       is_ghost_mode: parsedData.data.is_ghost_mode,
//       show_on_feed: parsedData.data.show_on_feed,
//       verified: parsedData.data.verified,
//     },
//   });
// });

export const userRoutes = routes;
