import { z } from "zod";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export const userSingupTypes = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const userSinginTypes = z.object({
  email: z.string(),
  password: z.string().min(6),
});

export const userDetailsTypes = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum([Gender.MALE, Gender.FEMALE, Gender.OTHER]),
  bio: z.string(),
  dateOfBirth: z.string(),
  location: z.string(),
  profilePic: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  pronounce: z.array(z.string()),
  interestedInGender: z.array(
    z.enum([Gender.MALE, Gender.FEMALE, Gender.OTHER])
  ),
  interests: z.array(z.string()),
  prefered_min_age: z.number(),
  prefered_max_age: z.number(),
  max_distance: z.number(),
  show_on_feed: z.boolean(),
  is_ghost_mode: z.boolean(),
  verified: z.boolean(),
  education: z.string(),
  height: z.string(),
  howyoudie: z.string(),
});
