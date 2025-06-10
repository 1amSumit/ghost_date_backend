import { PrismaClient } from "../../prisma/app/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.user.count();
  const skip = Math.floor(Math.random() * count);

  const randomUser = await prisma.user.findFirst({
    skip: skip,
  });

  const user = await prisma.user.findFirst({
    where: {
      email: "sj779619@gmail.com",
    },
  });
  await prisma.liked.create({
    data: {
      liked_to_id: user!.id,
      liked_by_id: randomUser!.id,
    },
  });
}

for (let i = 0; i < 20; i++) {
  main();
}
