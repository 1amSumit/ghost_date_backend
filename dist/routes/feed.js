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
exports.feedRoutes = void 0;
const express_1 = require("express");
const middleware_1 = require("../utils/middleware");
const client_1 = require("../../prisma/app/generated/prisma/client");
const redisClient_1 = require("../utils/redisClient");
const router = (0, express_1.Router)();
const prismaClient = new client_1.PrismaClient();
router.use(middleware_1.authMiddleware);
router.get("/getUnMatchedFeed/:page", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //@ts-ignore
    const userId = req.userId;
    const page = req.params.page ? parseInt(req.params.page) : 1;
    const user = yield prismaClient.user.findFirst({
        where: {
            id: userId,
        },
        include: {
            user_details: true,
        },
    });
    const interestsInGender = (_a = user === null || user === void 0 ? void 0 : user.user_details) === null || _a === void 0 ? void 0 : _a.interested_in_gender;
    const usersPerPage = 10;
    const getAllUser = yield prismaClient.user.findMany({
        where: {
            id: {
                not: userId,
            },
            user_details: {
                is: {
                    interested_in_gender: interestsInGender,
                },
            },
        },
        select: {
            id: true,
            email: true,
            user_details: true,
            preferences: true,
        },
        take: usersPerPage,
        skip: (page - 1) * usersPerPage,
    });
    if (getAllUser.length === 0) {
        res.status(200).json({
            message: "No match found!",
        });
        return;
    }
    const feed = [];
    for (const user of getAllUser) {
        const exists = yield redisClient_1.redisClient.get(user.id);
        if (exists === null) {
            feed.push(user);
        }
    }
    res.status(200).json({
        user: feed,
    });
}));
exports.feedRoutes = router;
