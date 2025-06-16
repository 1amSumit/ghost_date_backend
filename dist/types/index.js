"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserTypes = exports.userDetailsTypes = exports.userSinginTypes = exports.verifyOtpTypes = exports.userSingupTypes = void 0;
const zod_1 = require("zod");
exports.userSingupTypes = zod_1.z.object({
    email: zod_1.z.string().email(),
});
exports.verifyOtpTypes = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    otp: zod_1.z.string().min(6),
});
exports.userSinginTypes = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string().min(6),
});
exports.userDetailsTypes = zod_1.z.object({
    userId: zod_1.z.string(),
    email: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    gender: zod_1.z.string(),
    bio: zod_1.z.string(),
    dateOfBirth: zod_1.z.string(),
    location: zod_1.z.string(),
    latitude: zod_1.z.string(),
    longitude: zod_1.z.string(),
    pronounce: zod_1.z.array(zod_1.z.string()),
    interestedInGender: zod_1.z.string(),
    intensions: zod_1.z.array(zod_1.z.string()),
    prefered_min_age: zod_1.z.string(),
    prefered_max_age: zod_1.z.string(),
    max_distance: zod_1.z.string(),
    show_on_feed: zod_1.z.string(),
    is_ghost_mode: zod_1.z.string(),
    verified: zod_1.z.string(),
    education: zod_1.z.string(),
    height: zod_1.z.string(),
    howyoudie: zod_1.z.string(),
    sexuality: zod_1.z.string(),
});
exports.updateUserTypes = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    gender: zod_1.z.string(),
    bio: zod_1.z.string(),
    location: zod_1.z.string(),
    latitude: zod_1.z.string(),
    longitude: zod_1.z.string(),
    prefered_min_age: zod_1.z.string(),
    prefered_max_age: zod_1.z.string(),
    max_distance: zod_1.z.string(),
    show_on_feed: zod_1.z.string(),
    is_ghost_mode: zod_1.z.string(),
    howyoudie: zod_1.z.string(),
});
