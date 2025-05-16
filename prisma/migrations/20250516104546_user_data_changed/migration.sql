/*
  Warnings:

  - Added the required column `bio` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_of_birth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_active` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loation` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_pic` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_of_birth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "last_active" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "loation" TEXT NOT NULL,
ADD COLUMN     "profile_pic" TEXT NOT NULL;
