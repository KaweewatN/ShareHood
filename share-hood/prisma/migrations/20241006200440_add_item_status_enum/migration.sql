/*
  Warnings:

  - Changed the type of `itemStatus` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('Available', 'Rented', 'Unavailable');

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "itemStatus",
ADD COLUMN     "itemStatus" "ItemStatus" NOT NULL;
