/*
  Warnings:

  - You are about to drop the column `user_id` on the `Liked` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[liked_to_id,liked_by_id]` on the table `Liked` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `liked_to_id` to the `Liked` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Liked" DROP CONSTRAINT "Liked_user_id_fkey";

-- DropIndex
DROP INDEX "Liked_user_id_liked_by_id_key";

-- AlterTable
ALTER TABLE "Liked" DROP COLUMN "user_id",
ADD COLUMN     "liked_to_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Liked_liked_to_id_liked_by_id_key" ON "Liked"("liked_to_id", "liked_by_id");

-- AddForeignKey
ALTER TABLE "Liked" ADD CONSTRAINT "Liked_liked_to_id_fkey" FOREIGN KEY ("liked_to_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
