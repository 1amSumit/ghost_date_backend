/*
  Warnings:

  - Added the required column `howyoudie` to the `UserDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserDetail" ADD COLUMN     "howyoudie" TEXT NOT NULL;
