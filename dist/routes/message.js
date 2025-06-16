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
exports.messageRouter = void 0;
const express_1 = require("express");
const client_1 = require("../../prisma/app/generated/prisma/client");
const middleware_1 = require("../utils/middleware");
const prismaClient = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.use(middleware_1.authMiddleware);
router.get("/get-users-message/:to_user/:page", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { to_user } = req.params;
    const page = req.params.page ? parseInt(req.params.page) : 1;
    const messagePerPage = 10;
    //@ts-ignore
    const from_user = req.userId;
    try {
        const messages = yield prismaClient.message.findMany({
            where: {
                OR: [
                    { message_from_user: from_user, message_to_user: to_user },
                    { message_from_user: to_user, message_to_user: from_user },
                ],
            },
            select: {
                message_from_user: true,
                message_to_user: true,
                message: true,
                created_at: true,
                id: true,
            },
            orderBy: {
                created_at: "desc",
            },
            take: messagePerPage,
            skip: (page - 1) * messagePerPage,
        });
        res.status(200).json({
            messages,
        });
        return;
    }
    catch (Err) {
        console.log(Err);
        res.status(501).json({
            message: "Failed to get messages",
        });
        return;
    }
}));
exports.messageRouter = router;
