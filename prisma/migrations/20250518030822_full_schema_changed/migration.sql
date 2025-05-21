/*
  Warnings:

  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `date_of_birth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_active` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profile_pic` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user1_id,user2_id]` on the table `Matches` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Genders" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bio",
DROP COLUMN "date_of_birth",
DROP COLUMN "gender",
DROP COLUMN "last_active",
DROP COLUMN "latitude",
DROP COLUMN "location",
DROP COLUMN "longitude",
DROP COLUMN "profile_pic",
DROP COLUMN "username",
ADD COLUMN     "last_seen" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "UserDetail" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "pronounce" TEXT[],
    "gender" "Genders" NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "last_active" TIMESTAMP(3) NOT NULL,
    "profile_pic" TEXT NOT NULL,
    "interested_in_gender" "Genders"[],
    "user_id" TEXT NOT NULL,

    CONSTRAINT "UserDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreferences" (
    "id" TEXT NOT NULL,
    "interests" TEXT[],
    "prefered_min_age" INTEGER,
    "prefered_max_age" INTEGER,
    "max_distance" INTEGER,
    "show_on_feed" BOOLEAN NOT NULL,
    "is_ghost_mode" BOOLEAN NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "gallery" TEXT[],
    "video_intro" TEXT NOT NULL,
    "voice_intro" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_user_id_key" ON "UserDetail"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreferences_user_id_key" ON "UserPreferences"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Media_user_id_key" ON "Media"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Matches_user1_id_user2_id_key" ON "Matches"("user1_id", "user2_id");

-- AddForeignKey
ALTER TABLE "UserDetail" ADD CONSTRAINT "UserDetail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
