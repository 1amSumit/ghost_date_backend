"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = generateOtp;
const crypto_1 = require("crypto");
function generateOtp() {
    const otp = (0, crypto_1.randomInt)(100000, 1000000);
    return otp.toString();
}
