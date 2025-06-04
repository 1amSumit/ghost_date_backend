/*
  Warnings:

  - A unique constraint covering the columns `[user_id,liked_by_id]` on the table `Liked` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `liked_by_id` to the `Liked` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Liked" ADD COLUMN     "liked_by_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Liked_user_id_liked_by_id_key" ON "Liked"("user_id", "liked_by_id");

-- AddForeignKey
ALTER TABLE "Liked" ADD CONSTRAINT "Liked_liked_by_id_fkey" FOREIGN KEY ("liked_by_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
