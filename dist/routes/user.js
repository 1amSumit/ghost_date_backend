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
            message: "Invalid input",
        });
        return;
    }
    const newUser = yield prismaClient.user.create({
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
            latitude: parsedData.data.latitude,
            longitude: parsedData.data.longitude,
        },
    });
    res.status(200).json({
        user: newUser,
        message: "signup successfull",
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
