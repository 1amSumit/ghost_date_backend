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

  await redisClient.set(parsedData.data.email, otp, {
    expiration: {
      type: "EX",
      value: 600,
    },
  });
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

routes.post("/resend-otp", async (req, res) => {
  const { email } = req.body;
  const generateNewOtp = generateOtp();

  await redisClient.set(email, generateNewOtp, {
    expiration: {
      type: "EX",
      value: 600,
    },
  });
  await sendMail(email, generateNewOtp);

  res.status(200).json({
    message: "otp sent successfully",
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
    include: {
      user_details: true,
      preferences: true,
      media: true,
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
    userId: user.id,
  });
});

routes.post(
  "/create-user",
  upload.fields([
    { name: "profile-pic", maxCount: 1 },
    { name: "images", maxCount: 10 },
  ]),
  async (req, res) => {
    const body = req.body;

    const parsedData = userDetailsTypes.safeParse(body);
    const files = req.files;

    if (!parsedData.success) {
      res.status(411).json({
        message: "Incorrect input",
      });
      return;
    }

    try {
      const dateOfUser = parsedData.data.dateOfBirth;
      const [day, month, year] = dateOfUser.split("/");
      const dateOfBirth = new Date(`${year}-${month}-${day}`);
      const age = new Date().getFullYear() - +year;

      const urls: string[] = [];

      const bucketName = "ghostdatingbucket";

      await getBucket(bucketName);

      //@ts-ignore
      const imageFiles = files["images"] || [];
      //@ts-ignore
      for (const file of imageFiles) {
        const fileName = `${Date.now()}-${file.originalname}`;
        await minioClient.fPutObject(bucketName, fileName, file.path, {
          "Content-Type": "image/jpeg",
        });
        const publicUrl = `http://192.168.1.3:9000/${bucketName}/${fileName}`;
        urls.push(publicUrl);
      }

      let profilePicUrl = "";
      //@ts-ignore
      const profilePicFile = files["profile-pic"]?.[0];
      if (profilePicFile) {
        const profilePicName = `${Date.now()}-${profilePicFile.originalname}`;
        await minioClient.fPutObject(
          bucketName,
          profilePicName,
          profilePicFile.path,
          {
            "Content-Type": "image/jpeg",
          }
        );
        profilePicUrl = `http://192.168.1.3:9000/${bucketName}/${profilePicName}`;
      }

      await prismaClient.$transaction(async (tx) => {
        await tx.userDetail.create({
          data: {
            user_id: parsedData.data.userId,
            first_name: parsedData.data.firstName,
            last_name: parsedData.data.lastName,
            date_of_birth: dateOfBirth,
            age: age.toString(),
            gender: parsedData.data.gender.toLowerCase(),
            bio: parsedData.data.bio,
            location: parsedData.data.location,
            latitude: Number(parsedData.data.latitude),
            longitude: Number(parsedData.data.longitude),
            pronounce: parsedData.data.pronounce,
            interested_in_gender:
              parsedData.data.interestedInGender.toLowerCase(),
            profile_pic: profilePicUrl,
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

      const user = await prismaClient.user.findFirst({
        where: {
          id: parsedData.data.userId,
        },
        include: {
          user_details: true,
          preferences: true,
        },
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
        user,
        message: "user created successfully",
      });
    } catch (err) {
      redisClient.del(parsedData.data.email);
      res.status(500).json({
        message: "user creation failed",
      });
    }
  }
);

routes.post("/seen-user", authMiddleware, async (req, res) => {
  const { users } = req.body;

  //@ts-ignore
  const loggedInUserId = req.userId;

  if (!loggedInUserId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const redisKey = `seen:${loggedInUserId}`;

  try {
    const pipeline = redisClient.multi();

    users.forEach((user: string) => pipeline.sAdd(redisKey, user));

    await pipeline.exec();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }

  res.status(200).json({
    message: "done",
  });
});

routes.put("/update-user", upload.any(), authMiddleware, async (req, res) => {
  //@ts-ignore
  const loggedInUser = req.userId;

  const files = req.files;

  const data = req.body;

  const userDetailData: any = {};
  const preferencesData: any = {};

  if (!data) {
    res.status(400).json({ message: "No data provided" });
  }

  let profileFile;

  //@ts-ignore
  if (files && files.length > 0) {
    //@ts-ignore
    profileFile = files.find((file) => file.fieldname === "image");
  }

  const bucketName = "ghostdatingbucket";

  await getBucket(bucketName);

  let profilePicUrl = "";
  if (profileFile) {
    const profilePicName = `${Date.now()}-${profileFile.originalname}`;
    await minioClient.fPutObject(bucketName, profilePicName, profileFile.path, {
      "Content-Type": "image/jpeg",
    });
    profilePicUrl = `http://192.168.1.3:9000/${bucketName}/${profilePicName}`;
  }

  if (data.firstName !== undefined) userDetailData.first_name = data.firstName;
  if (data.lastName !== undefined) userDetailData.last_name = data.lastName;
  if (data.bio !== undefined) userDetailData.bio = data.bio;
  if (data.howyoudie !== undefined) userDetailData.howyoudie = data.howyoudie;
  if (data.location !== undefined) userDetailData.location = data.location;
  if (data.latitude !== undefined)
    userDetailData.latitude = Number(data.latitude);
  if (data.longitude !== undefined)
    userDetailData.longitude = Number(data.longitude);
  if (data.gender !== undefined) userDetailData.gender = data.gender;
  //@ts-ignore
  if (files?.length > 0) {
    userDetailData.profile_pic = profilePicUrl;
  }

  if (data.max_distance !== undefined)
    preferencesData.max_distance = Number(data.max_distance);
  if (data.prefered_min_age !== undefined)
    preferencesData.prefered_min_age = Number(data.prefered_min_age);
  if (data.prefered_max_age !== undefined)
    preferencesData.prefered_max_age = Number(data.prefered_max_age);
  if (data.show_on_feed !== undefined)
    preferencesData.show_on_feed = Boolean(data.show_on_feed);
  if (data.is_ghost_mode !== undefined)
    preferencesData.is_ghost_mode = Boolean(data.is_ghost_mode);

  try {
    await prismaClient.$transaction(async (tx) => {
      if (Object.keys(userDetailData).length > 0) {
        await tx.userDetail.update({
          where: {
            user_id: loggedInUser,
          },
          data: userDetailData,
        });
      }

      if (Object.keys(preferencesData).length > 0) {
        await tx.userPreferences.update({
          where: {
            user_id: loggedInUser,
          },
          data: preferencesData,
        });
      }
    });

    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});

routes.get("/getLoggedInUser", authMiddleware, async (req, res) => {
  //@ts-ignore
  const loggedInUserId = req.userId;

  try {
    const user = await prismaClient.user.findFirst({
      where: {
        id: loggedInUserId,
      },
      include: {
        user_details: true,
        preferences: true,
      },
    });
    res.status(200).json({
      user,
      message: "Succesfully get the user",
    });
  } catch (Err) {
    console.log(Err);
    res.status(404).json({
      message: "Unauthorized",
    });
  }
});

export const userRoutes = routes;
