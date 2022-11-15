/*
  Warnings:

  - A unique constraint covering the columns `[discordId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `discordId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "user_id_seq";
ALTER TABLE "User" ADD COLUMN     "discordId" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE "user_id_seq" OWNED BY "User"."id";

-- CreateIndex
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");
