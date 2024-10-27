/*
  Warnings:

  - You are about to drop the column `pickLocation` on the `Item` table. All the data in the column will be lost.
  - Added the required column `pickupLocation` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "pickLocation",
ADD COLUMN     "pickupLocation" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;
