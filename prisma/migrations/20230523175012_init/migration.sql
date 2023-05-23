-- CreateTable
CREATE TABLE "Todo" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "complete" BOOL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
