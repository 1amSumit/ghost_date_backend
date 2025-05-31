import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const BATCH_SIZE = 1000;
const TOTAL_USERS = 1_000_000;

async function generateUserData(batchSize: number) {
  const users = [];

  for (let i = 0; i < batchSize; i++) {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const dob = faker.date.birthdate({ min: 20, max: 30, mode: "age" });

    users.push({
      email,
      password,
      created_at: new Date(),
      user_details: {
        create: {
          first_name: firstName,
          last_name: lastName,
          pronounce: ["they", "them"],
          gender: faker.person.sexType(),
          date_of_birth: dob.toISOString(),
          bio: faker.person.bio(),
          height: `${faker.number.int({ min: 5, max: 6 })}ft ${faker.number.int(
            { min: 0, max: 11 }
          )}in`,
          education: faker.word.words(3),
          location: faker.location.city(),
          latitude: parseFloat(faker.location.latitude().toString()),
          longitude: parseFloat(faker.location.longitude().toString()),
          last_active: new Date(),
          profile_pic: faker.image.avatar(),
          howyoudie: faker.lorem.sentence(),
          sexuality: "Straight",
          interested_in_gender: "Female",
        },
      },
      preferences: {
        create: {
          intensions: ["Relationship", "Friendship"],
          prefered_min_age: 20,
          prefered_max_age: 30,
          max_distance: faker.number.int({ min: 10, max: 100 }),
          show_on_feed: true,
          is_ghost_mode: false,
          verified: faker.datatype.boolean(),
        },
      },
    });
  }

  return users;
}

async function main() {
  await prisma.userDetail.deleteMany({
    where: {
      first_name: {
        not: "sumit",
      },
    },
  });

  await prisma.userPreferences.deleteMany({});

  await prisma.user.deleteMany({
    where: {
      email: {
        not: "sj79619@gmail.com",
      },
    },
  });
  for (let i = 0; i < TOTAL_USERS; i += BATCH_SIZE) {
    const batchData = await generateUserData(BATCH_SIZE);

    // Insert each user with nested details and preferences
    for (const userData of batchData) {
      try {
        await prisma.user.create({
          data: userData,
        });
      } catch (error) {
        console.error("Failed to insert user:", userData.email, error);
      }
    }

    console.log(`Inserted ${i + BATCH_SIZE} users`);
  }
}

main()
  .then(async () => {
    console.log("Finished seeding 1 million users.");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error seeding users:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
