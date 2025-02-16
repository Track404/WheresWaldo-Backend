/*
  Warnings:

  - Added the required column `imageId` to the `Chraracters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chraracters" ADD COLUMN     "imageId" INTEGER NOT NULL;
