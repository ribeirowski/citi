/*
  Warnings:

  - Added the required column `time` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "time" TEXT NOT NULL,
ALTER COLUMN "date" SET DATA TYPE TEXT;
