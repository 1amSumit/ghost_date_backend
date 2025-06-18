"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const client_1 = require("../../prisma/app/generated/prisma/client");
const types_1 = require("../types");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const redisClient_1 = require("../utils/redisClient");
const genereateOtp_1 = require("../utils/genereateOtp");
const sendEmail_1 = require("../utils/sendEmail");
const middleware_1 = require("../utils/middleware");
const minio_1 = require("../utils/minio");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ dest: "uploads/" });
const prismaClient = new client_1.PrismaClient();
const routes = (0, express_1.Router)();
routes.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield req.body;
    const parsedData = types_1.userSingupTypes.safeParse(body);
    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid input",
            erro: parsedData,
        });
        return;
    }
    const exists = yield redisClient_1.redisClient.get(parsedData.data.email);
    if (exists !== null) {
        res.status(411).json({
            message: "already exists",
        });
        return;
    }
    const otp = (0, genereateOtp_1.generateOtp)();
    yield redisClient_1.redisClient.set(parsedData.data.email, otp, {
        expiration: {
            type: "EX",
            value: 600,
        },
    });
    yield (0, sendEmail_1.sendMail)(parsedData.data.email, otp);
    res.status(200).json({
        message: "otp sent successfully",
    });
}));
routes.post("/verify-otp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const body = req.body;
    const parsedData = types_1.verifyOtpTypes.safeParse(body);
    const getOtp = yield redisClient_1.redisClient.get(parsedData.data.email);
    if (getOtp !== ((_a = parsedData.data) === null || _a === void 0 ? void 0 : _a.otp)) {
        res.status(411).json({
            message: "incorrect otp",
        });
        return;
    }
    const hashedPassword = yield bcrypt_1.default.hash(parsedData.data.password, 16);
    yield redisClient_1.redisClient.del(parsedData.data.email);
    const user = yield prismaClient.user.create({
        data: {
            email: parsedData.data.email,
            password: hashedPassword,
        },
    });
    yield redisClient_1.redisClient.set(parsedData.data.email, user.id);
    res.status(200).json({
        user: user.id,
        message: "user created successfully",
    });
}));
routes.post("/resend-otp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const generateNewOtp = (0, genereateOtp_1.generateOtp)();
    yield redisClient_1.redisClient.set(email, generateNewOtp, {
        expiration: {
            type: "EX",
            value: 600,
        },
    });
    yield (0, sendEmail_1.sendMail)(email, generateNewOtp);
    res.status(200).json({
        message: "otp sent successfully",
    });
}));
routes.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsedData = types_1.userSinginTypes.safeParse(body);
    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid input",
        });
        return;
    }
    const user = yield prismaClient.user.findFirst({
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
    const isPasswordCorrect = yield bcrypt_1.default.compare(parsedData.data.password, user.password);
    if (!isPasswordCorrect) {
        res.status(401).json({
            message: "Incorrect password",
        });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_PASSWORD, {
        expiresIn: 90 * 24 * 60 * 60,
    });
    res.status(200).json({
        token,
        user,
        userId: user.id,
    });
}));
routes.post("/create-user", upload.fields([
    { name: "profile-pic", maxCount: 1 },
    { name: "images", maxCount: 10 },
]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const body = req.body;
    const parsedData = types_1.userDetailsTypes.safeParse(body);
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
        const urls = [];
        const bucketName = "ghostdatingbucket";
        yield (0, minio_1.getBucket)(bucketName);
        //@ts-ignore
        const imageFiles = files["images"] || [];
        //@ts-ignore
        for (const file of imageFiles) {
            const fileName = `${Date.now()}-${file.originalname}`;
            yield minio_1.minioClient.fPutObject(bucketName, fileName, file.path, {
                "Content-Type": "image/jpeg",
            });
            const publicUrl = `http://192.168.1.3:9000/${bucketName}/${fileName}`;
            urls.push(publicUrl);
        }
        let profilePicUrl = "";
        //@ts-ignore
        const profilePicFile = (_a = files["profile-pic"]) === null || _a === void 0 ? void 0 : _a[0];
        if (profilePicFile) {
            const profilePicName = `${Date.now()}-${profilePicFile.originalname}`;
            yield minio_1.minioClient.fPutObject(bucketName, profilePicName, profilePicFile.path, {
                "Content-Type": "image/jpeg",
            });
            profilePicUrl = `http://192.168.1.3:9000/${bucketName}/${profilePicName}`;
        }
        yield prismaClient.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            yield tx.userDetail.create({
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
                    interested_in_gender: parsedData.data.interestedInGender.toLowerCase(),
                    profile_pic: profilePicUrl,
                    height: parsedData.data.height,
                    education: parsedData.data.education,
                    howyoudie: parsedData.data.howyoudie,
                    sexuality: parsedData.data.sexuality,
                    last_active: new Date(),
                },
            });
            yield tx.userPreferences.create({
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
            yield tx.media.create({
                data: {
                    user_id: parsedData.data.userId,
                    gallery: urls,
                },
            });
        }));
        const user = yield prismaClient.user.findFirst({
            where: {
                id: parsedData.data.userId,
            },
            include: {
                user_details: true,
                preferences: true,
            },
        });
        const token = jsonwebtoken_1.default.sign({ id: parsedData.data.userId }, process.env.JWT_PASSWORD, {
            expiresIn: 90 * 24 * 60 * 60,
        });
        res.status(200).json({
            token,
            user,
            message: "user created successfully",
        });
    }
    catch (err) {
        redisClient_1.redisClient.del(parsedData.data.email);
        res.status(500).json({
            message: "user creation failed",
        });
    }
}));
routes.post("/seen-user", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { users } = req.body;
    //@ts-ignore
    const loggedInUserId = req.userId;
    if (!loggedInUserId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    const redisKey = `seen:${loggedInUserId}`;
    try {
        const pipeline = redisClient_1.redisClient.multi();
        users.forEach((user) => pipeline.sAdd(redisKey, user));
        yield pipeline.exec();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json({
        message: "done",
    });
}));
routes.put("/update-user", upload.any(), middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const loggedInUser = req.userId;
    const files = req.files;
    const data = req.body;
    const userDetailData = {};
    const preferencesData = {};
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
    yield (0, minio_1.getBucket)(bucketName);
    let profilePicUrl = "";
    if (profileFile) {
        const profilePicName = `${Date.now()}-${profileFile.originalname}`;
        yield minio_1.minioClient.fPutObject(bucketName, profilePicName, profileFile.path, {
            "Content-Type": "image/jpeg",
        });
        profilePicUrl = `http://192.168.1.3:9000/${bucketName}/${profilePicName}`;
    }
    if (data.firstName !== undefined)
        userDetailData.first_name = data.firstName;
    if (data.lastName !== undefined)
        userDetailData.last_name = data.lastName;
    if (data.bio !== undefined)
        userDetailData.bio = data.bio;
    if (data.howyoudie !== undefined)
        userDetailData.howyoudie = data.howyoudie;
    if (data.location !== undefined)
        userDetailData.location = data.location;
    if (data.latitude !== undefined)
        userDetailData.latitude = Number(data.latitude);
    if (data.longitude !== undefined)
        userDetailData.longitude = Number(data.longitude);
    if (data.gender !== undefined)
        userDetailData.gender = data.gender;
    //@ts-ignore
    if ((files === null || files === void 0 ? void 0 : files.length) > 0) {
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
        yield prismaClient.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            if (Object.keys(userDetailData).length > 0) {
                yield tx.userDetail.update({
                    where: {
                        user_id: loggedInUser,
                    },
                    data: userDetailData,
                });
            }
            if (Object.keys(preferencesData).length > 0) {
                yield tx.userPreferences.update({
                    where: {
                        user_id: loggedInUser,
                    },
                    data: preferencesData,
                });
            }
        }));
        res.status(200).json({ message: "User updated successfully" });
    }
    catch (err) {
        console.error("Error updating user:", err);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}));
routes.get("/getLoggedInUser", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const loggedInUserId = req.userId;
    try {
        const user = yield prismaClient.user.findFirst({
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
    }
    catch (Err) {
        console.log(Err);
        res.status(404).json({
            message: "Unauthorized",
        });
    }
}));
exports.userRoutes = routes;
