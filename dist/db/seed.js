"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../prisma/app/generated/prisma/client");
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
const BATCH_SIZE = 100;
const TOTAL_USERS = 1000;
function getFakerImageUrl(gender) {
    const base = "https://randomuser.me/api/portraits";
    const id = faker_1.faker.number.int({ min: 0, max: 99 });
    if (gender.toLowerCase() === "male") {
        return `${base}/men/${id}.jpg`;
    }
    else {
        return `${base}/women/${id}.jpg`;
    }
}
function generateUserData(batchSize) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = [];
        for (let i = 0; i < batchSize; i++) {
            const email = faker_1.faker.internet.email();
            const password = faker_1.faker.internet.password();
            const firstName = faker_1.faker.person.firstName();
            const lastName = faker_1.faker.person.lastName();
            const dob = faker_1.faker.date.birthdate({ min: 20, max: 30, mode: "age" });
            const gender = faker_1.faker.helpers.arrayElement(["male", "female"]);
            const profilePic = getFakerImageUrl(gender);
            const galleryImages = [
                getFakerImageUrl(gender),
                getFakerImageUrl(gender),
                getFakerImageUrl(gender),
            ];
            const today = new Date();
            const age = today.getFullYear() -
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
                        bio: faker_1.faker.person.bio(),
                        height: `${faker_1.faker.number.int({ min: 5, max: 6 })}ft ${faker_1.faker.number.int({
                            min: 0,
                            max: 11,
                        })}in`,
                        education: faker_1.faker.word.words(3),
                        location: faker_1.faker.location.city(),
                        latitude: faker_1.faker.location.latitude(),
                        longitude: faker_1.faker.location.longitude(),
                        last_active: new Date(),
                        profile_pic: profilePic,
                        howyoudie: faker_1.faker.lorem.sentence(),
                        sexuality: "Straight",
                        interested_in_gender: gender === "male" ? "Female" : "Male",
                    },
                },
                preferences: {
                    create: {
                        intensions: ["Relationship", "Friendship"],
                        prefered_min_age: 20,
                        prefered_max_age: 30,
                        max_distance: faker_1.faker.number.int({ min: 10, max: 100 }),
                        show_on_feed: true,
                        is_ghost_mode: false,
                        verified: faker_1.faker.datatype.boolean(),
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
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < TOTAL_USERS; i += BATCH_SIZE) {
            const batchData = yield generateUserData(BATCH_SIZE);
            for (const userData of batchData) {
                try {
                    yield prisma.user.create({ data: userData });
                }
                catch (err) {
                    console.error("❌ Failed to insert user:", userData.email, err);
                }
            }
            console.log(`✅ Inserted ${i + BATCH_SIZE} users`);
        }
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🎉 Finished seeding users.");
    yield prisma.$disconnect();
}))
    .catch((err) => __awaiter(void 0, void 0, void 0, function* () {
    console.error("❌ Error seeding users:", err);
    yield prisma.$disconnect();
    process.exit(1);
}));
