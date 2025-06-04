import { Router } from "express";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import {
  userDetailsTypes,
  userSinginTypes,
  userSingupTypes,
  verifyOtpTypes,
} from "../types";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { redisClient } from "../utils/redisClient";
import { generateOtp } from "../utils/genereateOtp";
import { sendMail } from "../utils/sendEmail";
import { authMiddleware } from "../utils/middleware";
import { getBucket, minioClient } from "../utils/minio";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
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
  const body = req.body;
  const parsedData = userSinginTypes.safeParse(body);

  if (!parsedData.success) {
    res.status(411).json({
      message: "Invalid input",
    });
    return;
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.email,
    },
  });

  if (!user) {
    res.status(411).json({
      message: "User does not exist. Please sign up first.",
    });
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(
    parsedData.data.password,
    user.password
  );

  if (!isPasswordCorrect) {
    res.status(401).json({
      message: "Incorrect password",
    });
    return;
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_PASSWORD as string, {
    expiresIn: 90 * 24 * 60 * 60,
  });

  res.status(200).json({
    token,
    user,
  });
});

routes.post("/create-user", upload.array("images"), async (req, res) => {
  const body = req.body;

  const parsedData = userDetailsTypes.safeParse(body);
  const files = req.files;

  if (!parsedData.success) {
    res.status(411).json({
      message: "Incorrect input",
    });
    return;
  }

  const urls: string[] = [];

  const bucketName = "ghostdatingbucket";

  await getBucket(bucketName);

  //@ts-ignore
  for (const file of files) {
    const fileName = `${Date.now()}-${file.originalname}`;
    await minioClient.fPutObject(bucketName, fileName, file.path);
    const publicUrl = `http://localhost:9000/${bucketName}/${fileName}`;
    urls.push(publicUrl);
  }

  await prismaClient.$transaction(async (tx) => {
    await tx.userDetail.create({
      data: {
        user_id: parsedData.data.userId,
        first_name: parsedData.data.firstName,
        last_name: parsedData.data.lastName,
        date_of_birth: parsedData.data.dateOfBirth,
        gender: parsedData.data.gender,
        bio: parsedData.data.bio,
        location: parsedData.data.location,
        latitude: Number(parsedData.data.latitude),
        longitude: Number(parsedData.data.longitude),
        pronounce: parsedData.data.pronounce,
        interested_in_gender: parsedData.data.interestedInGender,
        profile_pic: parsedData.data.profilePic,
        height: parsedData.data.height,
        education: parsedData.data.education,
        howyoudie: parsedData.data.howyoudie,
        sexuality: parsedData.data.sexuality,
        last_active: new Date(),
      },
    });

    await tx.userPreferences.create({
      data: {
        user_id: parsedData.data.userId,
        intensions: parsedData.data.intensions,
        prefered_min_age: Number(parsedData.data.prefered_min_age),
        prefered_max_age: Number(parsedData.data.prefered_max_age),
        max_distance: Number(parsedData.data.max_distance),
        is_ghost_mode: Boolean(parsedData.data.is_ghost_mode),
        show_on_feed: Boolean(parsedData.data.show_on_feed),
        verified: Boolean(parsedData.data.verified),
      },
    });

    await tx.media.create({
      data: {
        user_id: parsedData.data.userId,
        gallery: urls,
      },
    });
  });

  const token = jwt.sign(
    { id: parsedData.data.userId },
    process.env.JWT_PASSWORD as string,
    {
      expiresIn: 90 * 24 * 60 * 60,
    }
  );

  res.status(200).json({
    token,
    message: "user created successfully",
  });
});

routes.post("/seen-user", authMiddleware, async (req, res) => {
  const { users } = req.body;
  //@ts-ignore
  const loggedInUserId = req.userId;

  console.log(users);

  try {
    const pipeline = redisClient.multi();

    users.forEach((user: String) =>
      pipeline.set(`seen:${loggedInUserId}:${user}`, "seen")
    );

    await pipeline.exec();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }

  res.status(200).json({
    message: "done",
  });
});

export const userRoutes = routes;
