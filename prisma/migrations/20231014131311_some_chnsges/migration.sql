/*
  Warnings:

  - You are about to drop the column `bookingSlot` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `slotId` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "bookingSlot",
ADD COLUMN     "slotId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_slotId_fkey" FOREIGN KEY ("slotId") REFERENCES "time_slots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
