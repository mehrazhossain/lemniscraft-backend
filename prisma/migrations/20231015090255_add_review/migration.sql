/*
  Warnings:

  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_reviewById_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_serviceId_fkey";

-- DropTable
DROP TABLE "Review";

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "reviewById" TEXT NOT NULL,
    "reviewText" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reviewById_fkey" FOREIGN KEY ("reviewById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
