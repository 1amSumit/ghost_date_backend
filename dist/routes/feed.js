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
//@ts-ignore
router.get("/getMatchedFeed", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const getAllUser = yield prismaClient.user.findMany({
        where: {
            id: {
                not: userId,
            },
        },
        include: {
            user_details: true,
            preferences: true,
        },
    });
    if (getAllUser.length === 0) {
        return res.status(200).json({
            message: "No match found!",
        });
    }
    const feed = [];
    for (const user of getAllUser) {
        const exists = yield redisClient_1.redisClient.get(user.id);
        console.log(`User ${user.id} exists in cache?`, exists !== null);
        if (exists === null) {
            feed.push(user);
            yield redisClient_1.redisClient.set(user.id, JSON.stringify(user), {
                EX: 3600,
            });
        }
    }
    res.status(200).json({
        user: feed,
    });
}));
exports.feedRoutes = router;
