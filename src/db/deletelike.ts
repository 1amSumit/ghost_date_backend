import { PrismaClient } from "../../prisma/app/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.liked.deleteMany({});
}

main();
