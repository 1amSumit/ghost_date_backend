"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSinginTypes = exports.userSingupTypes = void 0;
const zod_1 = require("zod");
exports.userSingupTypes = zod_1.z.object({
    username: zod_1.z.string().min(6),
    email: zod_1.z.string(),
    password: zod_1.z.string().min(6),
});
exports.userSinginTypes = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string().min(6),
});
