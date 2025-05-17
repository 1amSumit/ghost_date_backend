/*
  Warnings:

  - Changed the type of `date_of_birth` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "date_of_birth",
ADD COLUMN     "date_of_birth" TIMESTAMP(3) NOT NULL;
