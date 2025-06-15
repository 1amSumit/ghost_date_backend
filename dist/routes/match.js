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
exports.matchRoutes = void 0;
const express_1 = require("express");
const middleware_1 = require("../utils/middleware");
const client_1 = require("../../prisma/app/generated/prisma/client");
const router = (0, express_1.Router)();
const prismaClient = new client_1.PrismaClient();
router.use(middleware_1.authMiddleware);
router.post("/add-match", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const loggedInUser = req.userId;
    const gotLikedBack = req.body.users;
    console.log(gotLikedBack);
    try {
        yield Promise.all(gotLikedBack.map((userId) => {
            prismaClient.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
                yield tx.matches.create({
                    data: {
                        user1_id: loggedInUser,
                        user2_id: userId,
                        is_matched_at: new Date(),
                        is_blocked: false,
                    },
                });
                yield tx.liked.delete({
                    where: {
                        liked_to_id_liked_by_id: {
                            liked_by_id: userId,
                            liked_to_id: loggedInUser,
                        },
                    },
                });
            }));
        }));
        res.status(200).json({ message: "Matches added successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(411).json({
            message: "Error matching the user",
        });
    }
}));
router.get("/get-user-match", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const loggedInUser = req.userId;
    if (!loggedInUser) {
        res.status(404).json({
            message: "UnAuthorized",
        });
    }
    try {
        const matchedUsers = yield prismaClient.matches.findMany({
            where: {
                OR: [{ user1_id: loggedInUser }, { user2_id: loggedInUser }],
            },
            include: {
                user1: {
                    include: {
                        user_details: true,
                    },
                },
                user2: {
                    include: {
                        user_details: true,
                    },
                },
            },
        });
        const result = matchedUsers.map((match) => {
            const matchedUser = match.user1_id === loggedInUser ? match.user2 : match.user1;
            return {
                match_id: match.id,
                matched_user_id: matchedUser.id,
                user_details: matchedUser.user_details,
            };
        });
        res.status(200).json({
            matchedUsers: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(411).json({
            message: "Sever error",
        });
    }
}));
exports.matchRoutes = router;
