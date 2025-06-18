import { randomInt } from "crypto";

export function generateOtp() {
  const otp = randomInt(100000, 1000000);
  return otp.toString();
}
