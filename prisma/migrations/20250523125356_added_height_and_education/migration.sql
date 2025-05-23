/*
  Warnings:

  - Added the required column `education` to the `UserDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `UserDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserDetail" ADD COLUMN     "education" TEXT NOT NULL,
ADD COLUMN     "height" TEXT NOT NULL;
