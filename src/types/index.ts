import { z } from "zod";

export const userSingupTypes = z.object({
  username: z.string().min(6),
  email: z.string(),
  password: z.string().min(6),
});

export const userSinginTypes = z.object({
  email: z.string(),
  password: z.string().min(6),
});
