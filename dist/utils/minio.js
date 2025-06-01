"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minioClient = void 0;
const minio_1 = require("minio");
exports.minioClient = new minio_1.Client({
    endPoint: "localhost",
    port: 9000,
    useSSL: false,
    accessKey: "minioadmin",
    secretKey: "minioadmin",
});
