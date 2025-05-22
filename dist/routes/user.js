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
const prismaClient = new client_1.PrismaClient();
const routes = (0, express_1.Router)();
routes.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield req.body;
    const parsedData = types_1.userSingupTypes.safeParse(body);
    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid inputt",
            erro: parsedData,
        });
        return;
    }
    yield prismaClient.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield tx.user.create({
            data: {
                email: parsedData.data.email,
                password: parsedData.data.password,
            },
        });
        yield tx.userDetail.create({
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
        yield tx.userPreferences.create({
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
    }));
    res.status(200).json({
        message: "User created successfully",
    });
}));
routes.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield req.body;
    const parsedData = types_1.userSinginTypes.safeParse(body);
    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid input",
        });
        return;
    }
    const userExists = yield prismaClient.user.findFirst({
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
    const token = jsonwebtoken_1.default.sign({ id: userExists.id }, process.env.JWT_PASSWORD, {
        expiresIn: 10 * 60 * 60,
    });
    res.status(200).json({
        token,
        user: userExists,
    });
}));
exports.userRoutes = routes;
