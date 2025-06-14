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
Object.defineProperty(exports, "__esModule", { value: true });
exports.likedUser = void 0;
const express_1 = require("express");
const middleware_1 = require("../utils/middleware");
const client_1 = require("../../prisma/app/generated/prisma/client");
const router = (0, express_1.Router)();
const prismaClient = new client_1.PrismaClient();
router.use(middleware_1.authMiddleware);
router.post("/set-liked", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const loggedInUser = req.userId;
    const { users } = req.body;
    try {
        users.forEach((user) => __awaiter(void 0, void 0, void 0, function* () {
            yield prismaClient.liked.create({
                data: {
                    liked_to_id: user,
                    liked_by_id: loggedInUser,
                },
            });
        }));
    }
    catch (err) {
        res.status(501).json({
            message: "server error",
        });
    }
    res.status(200).json({
        message: "done",
    });
}));
router.get("/get-liked-users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const loggedInUser = req.userId;
    try {
        const getUserWhoLiked = yield prismaClient.liked.findMany({
            where: {
                liked_to_id: loggedInUser,
            },
            select: {
                id: true,
                liked_by: {
                    include: {
                        user_details: true,
                        media: true,
                        preferences: true,
                    },
                },
            },
        });
        res.status(200).json({
            users: getUserWhoLiked,
        });
    }
    catch (error) {
        console.error("Error fetching liked users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
exports.likedUser = router;
