/*
  Warnings:

  - Changed the type of `gender` on the `UserDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `interested_in_gender` on the `UserDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserDetail" DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT NOT NULL,
DROP COLUMN "interested_in_gender",
ADD COLUMN     "interested_in_gender" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Genders";
