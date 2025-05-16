import { z } from "zod";

export const userSingupTypes = z.object({
  username: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(6),
  gender: z.string(),
  bio: z.string(),
  dateOfBirth: z.date(),
  location: z.string(),
  profilePic: z.string(),
});

export const userSinginTypes = z.object({
  email: z.string(),
  password: z.string().min(6),
});
