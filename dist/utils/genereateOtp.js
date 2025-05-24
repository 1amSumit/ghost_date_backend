"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = generateOtp;
function generateOtp() {
    return Math.floor(100000 + Math.random() * 90000).toString();
}
