import { PrismaClient } from "../../prisma/app/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findFirst({
    where: {
      email: "sj779619@gmail.com",
    },
  });
  await prisma.liked.deleteMany({});
  await prisma.userPreferences.deleteMany({
    // where: {
    //   user_id: {
    //     not: user?.id,
    //   },
    // },
  });

  await prisma.media.deleteMany({
    // where: {
    //   user_id: {
    //     not: user?.id,
    //   },
    // },
  });
  await prisma.userDetail.deleteMany({
    // where: {
    //   user_id: {
    //     not: user?.id,
    //   },
    // },
  });

  await prisma.matches.deleteMany({});

  await prisma.user.deleteMany({
    // where: {
    //   id: {
    //     not: user?.id,
    //   },
    // },
  });
}

main();
