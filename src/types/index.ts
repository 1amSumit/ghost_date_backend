import { z } from "zod";

export const userSingupTypes = z.object({
  email: z.string().email(),
});
export const verifyOtpTypes = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  otp: z.string().min(6),
});

export const userSinginTypes = z.object({
  email: z.string(),
  password: z.string().min(6),
});

export const userDetailsTypes = z.object({
  userId: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  bio: z.string(),
  dateOfBirth: z.string(),
  location: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  pronounce: z.array(z.string()),
  interestedInGender: z.string(),
  intensions: z.array(z.string()),
  prefered_min_age: z.string(),
  prefered_max_age: z.string(),
  max_distance: z.string(),
  show_on_feed: z.string(),
  is_ghost_mode: z.string(),
  verified: z.string(),
  education: z.string(),
  height: z.string(),
  howyoudie: z.string(),
  sexuality: z.string(),
});

export const updateUserTypes = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  bio: z.string(),
  location: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  prefered_min_age: z.string(),
  prefered_max_age: z.string(),
  max_distance: z.string(),
  show_on_feed: z.string(),
  is_ghost_mode: z.string(),
  howyoudie: z.string(),
});
