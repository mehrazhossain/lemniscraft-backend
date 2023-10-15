-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "serviceId" TEXT NOT NULL,
    "reviewById" TEXT NOT NULL,
    "reviewText" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewById_fkey" FOREIGN KEY ("reviewById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
