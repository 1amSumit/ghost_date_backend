import { PrismaClient } from "../../prisma/app/generated/prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const BATCH_SIZE = 100;
const TOTAL_USERS = 1000;

function getFakerImageUrl(gender: string): string {
  const base = "https://randomuser.me/api/portraits";
  const id = faker.number.int({ min: 0, max: 99 });

  if (gender.toLowerCase() === "male") {
    return `${base}/men/${id}.jpg`;
  } else {
    return `${base}/women/${id}.jpg`;
  }
}
async function generateUserData(batchSize: number) {
  const users: any[] = [];

  for (let i = 0; i < batchSize; i++) {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const dob = faker.date.birthdate({ min: 20, max: 30, mode: "age" });
    const gender = faker.helpers.arrayElement(["male", "female"]);

    const profilePic = getFakerImageUrl(gender);
    const galleryImages = [
      getFakerImageUrl(gender),
      getFakerImageUrl(gender),
      getFakerImageUrl(gender),
    ];

    const today = new Date();
    const age =
      today.getFullYear() -
      dob.getFullYear() -
      (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
        ? 1
        : 0);

    users.push({
      email,
      password,
      created_at: new Date(),
      user_details: {
        create: {
          first_name: firstName,
          last_name: lastName,
          pronounce: ["they", "them"],
          gender,
          date_of_birth: dob.toISOString(),
          age: age.toString(),
          bio: faker.person.bio(),
          height: `${faker.number.int({ min: 5, max: 6 })}ft ${faker.number.int(
            {
              min: 0,
              max: 11,
            }
          )}in`,
          education: faker.word.words(3),
          location: faker.location.city(),
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude(),
          last_active: new Date(),
          profile_pic: profilePic,
          howyoudie: faker.lorem.sentence(),
          sexuality: "Straight",
          interested_in_gender: gender === "male" ? "Female" : "Male",
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
      media: {
        create: {
          gallery: galleryImages,
        },
      },
    });
  }

  return users;
}

async function main() {
  for (let i = 0; i < TOTAL_USERS; i += BATCH_SIZE) {
    const batchData = await generateUserData(BATCH_SIZE);

    for (const userData of batchData) {
      try {
        await prisma.user.create({ data: userData });
      } catch (err) {
        console.error("❌ Failed to insert user:", userData.email, err);
      }
    }

    console.log(`✅ Inserted ${i + BATCH_SIZE} users`);
  }
}

main()
  .then(async () => {
    console.log("🎉 Finished seeding users.");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error("❌ Error seeding users:", err);
    await prisma.$disconnect();
    process.exit(1);
  });
