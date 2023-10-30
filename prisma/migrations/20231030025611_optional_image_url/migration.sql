-- AlterTable
ALTER TABLE "services" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" SET DEFAULT '';
