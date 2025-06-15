/*
  Warnings:

  - The `date_of_birth` column on the `UserDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserDetail" DROP COLUMN "date_of_birth",
ADD COLUMN     "date_of_birth" TIMESTAMP(3);
