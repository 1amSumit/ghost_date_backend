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
exports.uploadRouter = void 0;
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const middleware_1 = require("../utils/middleware");
const minio_1 = require("../utils/minio");
const client_1 = require("../../prisma/app/generated/prisma/client");
const upload = (0, multer_1.default)({ dest: "uploads/" });
const prismaClinet = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.post("/upload-images", middleware_1.authMiddleware, upload.array("images"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const urls = [];
    console.log(req.files);
    //@ts-ignore
    const userId = req.userId;
    //@ts-ignore
    for (const file of req.files) {
        const fileName = `${Date.now()}-${file.originalname}`;
        yield minio_1.minioClient.fPutObject("user-images", fileName, file.path);
        const publicUrl = `http://localhost:9000/user-images/${fileName}`;
        urls.push(publicUrl);
    }
    res.status(200).json({
        message: "uploaded",
    });
}));
exports.uploadRouter = router;
