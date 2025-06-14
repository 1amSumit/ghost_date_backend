-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "message_from_user" TEXT NOT NULL,
    "message_to_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_message_from_user_message_to_user_key" ON "Message"("message_from_user", "message_to_user");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_message_from_user_fkey" FOREIGN KEY ("message_from_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_message_to_user_fkey" FOREIGN KEY ("message_to_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
