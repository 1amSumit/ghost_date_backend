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
exports.userRoutes = void 0;
const express_1 = require("express");
const client_1 = require("../../prisma/app/generated/prisma/client");
const types_1 = require("../types");
const prismaClient = new client_1.PrismaClient();
const routes = (0, express_1.Router)();
routes.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield req.body;
    const parsedData = types_1.userSingupTypes.safeParse(body);
    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid input",
        });
        return;
    }
    res.status(200).json({
        message: "signup successfull",
    });
}));
exports.userRoutes = routes;
