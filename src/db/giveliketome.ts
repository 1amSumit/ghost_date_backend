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

  if (user && randomUser && user.id !== randomUser.id) {
    await prisma.liked.create({
      data: {
        liked_to_id: user.id,
        liked_by_id: randomUser.id,
      },
    });
    console.log(`User ${randomUser.email} liked ${user.email}`);
  }
}

async function abhirajLike() {
  const abhiraj = await prisma.user.findFirst({
    where: {
      email: "sumitjha.gcp@gmail.com",
    },
  });

  console.log(abhiraj);

  const user = await prisma.user.findFirst({
    where: {
      email: "sj779619@gmail.com",
    },
  });

  console.log(user);

  if (abhiraj && user) {
    await prisma.liked.create({
      data: {
        liked_to_id: user.id,
        liked_by_id: abhiraj.id,
      },
    });
    console.log(`Abhiraj liked ${user.email}`);
  } else {
    console.error("User(s) not found");
  }
}

async function run() {
  try {
    // for (let i = 0; i < 20; i++) {
    //   await main();
    // }
    await abhirajLike();
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await prisma.$disconnect();
    console.log("done all");
  }
}

run();
