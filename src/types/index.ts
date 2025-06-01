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
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  bio: z.string(),
  dateOfBirth: z.string(),
  location: z.string(),
  profilePic: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  pronounce: z.array(z.string()),
  interestedInGender: z.string(),
  intensions: z.array(z.string()),
  prefered_min_age: z.number(),
  prefered_max_age: z.number(),
  max_distance: z.number(),
  show_on_feed: z.boolean(),
  is_ghost_mode: z.boolean(),
  verified: z.boolean(),
  education: z.string(),
  height: z.string(),
  howyoudie: z.string(),
  sexuality: z.string(),
  images: z.array(
    z.object({
      id: z.number(),
      uri: z.string(),
      isRequired: z.boolean(),
    })
  ),
});
