/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_id` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Address` table. All the data in the column will be lost.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `payment_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Payment` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - The required column `addressID` was added to the `Address` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userID` to the `Address` table without a default value. This is not possible if the table is not empty.
  - The required column `paymentID` was added to the `Payment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userID` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - The required column `userID` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_user_id_fkey";

-- DropIndex
DROP INDEX "User_phone_key";

-- AlterTable
ALTER TABLE "Address" DROP CONSTRAINT "Address_pkey",
DROP COLUMN "address_id",
DROP COLUMN "user_id",
ADD COLUMN     "addressID" TEXT NOT NULL,
ADD COLUMN     "userID" TEXT NOT NULL,
ADD CONSTRAINT "Address_pkey" PRIMARY KEY ("addressID");

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "payment_id",
DROP COLUMN "user_id",
ADD COLUMN     "paymentID" TEXT NOT NULL,
ADD COLUMN     "userID" TEXT NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentID");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "phone",
DROP COLUMN "user_id",
ADD COLUMN     "userID" TEXT NOT NULL,
ADD COLUMN     "verified" BOOLEAN DEFAULT false,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userID");

-- CreateTable
CREATE TABLE "PersonalInfo" (
    "personalInfoID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("personalInfoID")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "wishListID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("wishListID")
);

-- CreateTable
CREATE TABLE "Item" (
    "itemID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemDescription" TEXT NOT NULL,
    "itemPrice" INTEGER NOT NULL,
    "itemQuantity" INTEGER NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "itemReturnDuration" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pickLocation" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("itemID")
);

-- CreateTable
CREATE TABLE "Review" (
    "reviewID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "itemID" TEXT NOT NULL,
    "reviewRating" INTEGER NOT NULL,
    "reviewComment" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewID")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "transactionID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "itemID" TEXT NOT NULL,
    "transactionStatus" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transactionReturnDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transactionID")
);

-- CreateTable
CREATE TABLE "Notification" (
    "notificationID" TEXT NOT NULL,
    "notificationHeader" TEXT NOT NULL,
    "notificationDetails" TEXT NOT NULL,
    "notificationTimestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notificationID")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_phone_key" ON "PersonalInfo"("phone");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_itemID_fkey" FOREIGN KEY ("itemID") REFERENCES "Item"("itemID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_itemID_fkey" FOREIGN KEY ("itemID") REFERENCES "Item"("itemID") ON DELETE RESTRICT ON UPDATE CASCADE;
