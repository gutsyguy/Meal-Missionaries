-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);
