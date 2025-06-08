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
const BATCH_SIZE = 1000;
const TOTAL_USERS = 1000000;
function generateUserData(batchSize) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = [];
        for (let i = 0; i < batchSize; i++) {
            const email = faker_1.faker.internet.email();
            const password = faker_1.faker.internet.password();
            const firstName = faker_1.faker.person.firstName();
            const lastName = faker_1.faker.person.lastName();
            const dob = faker_1.faker.date.birthdate({ min: 20, max: 30, mode: "age" });
            const gender = faker_1.faker.person.sexType();
            const genderCode = gender.toLowerCase() === "male" ? "men" : "women";
            const profilePic = `https://randomuser.me/api/portraits/${genderCode}/${faker_1.faker.number.int({ min: 1, max: 99 })}.jpg`;
            const galleryImages = Array.from({ length: 3 }, () => `https://randomuser.me/api/portraits/${genderCode}/${faker_1.faker.number.int({
                min: 1,
                max: 99,
            })}.jpg`);
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
                        bio: faker_1.faker.person.bio(),
                        height: `${faker_1.faker.number.int({ min: 5, max: 6 })}ft ${faker_1.faker.number.int({ min: 0, max: 11 })}in`,
                        education: faker_1.faker.word.words(3),
                        location: faker_1.faker.location.city(),
                        latitude: parseFloat(faker_1.faker.location.latitude().toString()),
                        longitude: parseFloat(faker_1.faker.location.longitude().toString()),
                        last_active: new Date(),
                        profile_pic: profilePic,
                        howyoudie: faker_1.faker.lorem.sentence(),
                        sexuality: "Straight",
                        interested_in_gender: "Female",
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
                    yield prisma.user.create({
                        data: userData,
                    });
                }
                catch (error) {
                    console.error("Failed to insert user:", userData.email, error);
                }
            }
            console.log(`Inserted ${i + BATCH_SIZE} users`);
        }
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Finished seeding 1 million users.");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error("Error seeding users:", e);
    yield prisma.$disconnect();
    process.exit(1);
}));
