import { PrismaClient } from "../../prisma/app/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.liked.deleteMany({});
  await prisma.userPreferences.deleteMany({});

  await prisma.media.deleteMany({});

  await prisma.user.deleteMany({
    where: {
      email: {
        not: "sj79619@gmail.com",
      },
    },
  });
}

main();
