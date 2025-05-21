"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSinginTypes = exports.userSingupTypes = void 0;
const zod_1 = require("zod");
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (Gender = {}));
exports.userSingupTypes = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    gender: zod_1.z.enum([Gender.MALE, Gender.FEMALE, Gender.OTHER]),
    bio: zod_1.z.string(),
    dateOfBirth: zod_1.z.string(),
    location: zod_1.z.string(),
    profilePic: zod_1.z.string(),
    latitude: zod_1.z.number(),
    longitude: zod_1.z.number(),
    pronounce: zod_1.z.array(zod_1.z.string()),
    interestedInGender: zod_1.z.array(zod_1.z.enum([Gender.MALE, Gender.FEMALE, Gender.OTHER])),
    interests: zod_1.z.array(zod_1.z.string()),
    prefered_min_age: zod_1.z.number(),
    prefered_max_age: zod_1.z.number(),
    max_distance: zod_1.z.number(),
    show_on_feed: zod_1.z.boolean(),
    is_ghost_mode: zod_1.z.boolean(),
    verified: zod_1.z.boolean(),
});
exports.userSinginTypes = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string().min(6),
});
