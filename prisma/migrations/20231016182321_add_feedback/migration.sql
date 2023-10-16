/*
  Warnings:

  - You are about to drop the `CloseDay` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Day` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CloseDay";

-- DropTable
DROP TABLE "Day";

-- CreateTable
CREATE TABLE "days" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,

    CONSTRAINT "days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "closeDay" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "closeDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback_form" (
    "id" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "feedback_form_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "closeDay_date_key" ON "closeDay"("date");

-- AddForeignKey
ALTER TABLE "feedback_form" ADD CONSTRAINT "feedback_form_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
