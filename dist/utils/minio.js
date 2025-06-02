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
exports.getBucket = exports.minioClient = void 0;
const minio_1 = require("minio");
exports.minioClient = new minio_1.Client({
    endPoint: "localhost",
    port: 9000,
    useSSL: false,
    accessKey: "minioadmin",
    secretKey: "minioadmin",
});
const getBucket = (bucketName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exists = yield exports.minioClient.bucketExists(bucketName);
        if (!exists) {
            yield exports.minioClient.makeBucket(bucketName);
            console.log(`Bucket "${bucketName}" created successfully.`);
        }
        else {
            console.log(`Bucket "${bucketName}" already exists.`);
        }
    }
    catch (error) {
        console.error(`Error in getBucket:`, error);
        throw error;
    }
});
exports.getBucket = getBucket;
