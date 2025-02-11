/*
  Warnings:

  - You are about to drop the column `Xaxis1` on the `Position` table. All the data in the column will be lost.
  - You are about to drop the column `Xaxis2` on the `Position` table. All the data in the column will be lost.
  - You are about to drop the column `Yaxis1` on the `Position` table. All the data in the column will be lost.
  - You are about to drop the column `Yaxis2` on the `Position` table. All the data in the column will be lost.
  - Added the required column `Xmax` to the `Position` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Xmin` to the `Position` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Ymax` to the `Position` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Ymin` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Position" DROP COLUMN "Xaxis1",
DROP COLUMN "Xaxis2",
DROP COLUMN "Yaxis1",
DROP COLUMN "Yaxis2",
ADD COLUMN     "Xmax" INTEGER NOT NULL,
ADD COLUMN     "Xmin" INTEGER NOT NULL,
ADD COLUMN     "Ymax" INTEGER NOT NULL,
ADD COLUMN     "Ymin" INTEGER NOT NULL;
