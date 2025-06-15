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
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield prisma.user.count();
        const skip = Math.floor(Math.random() * count);
        const randomUser = yield prisma.user.findFirst({
            skip: skip,
        });
        const user = yield prisma.user.findFirst({
            where: {
                email: "sj779619@gmail.com",
            },
        });
        if (user && randomUser && user.id !== randomUser.id) {
            yield prisma.liked.create({
                data: {
                    liked_to_id: user.id,
                    liked_by_id: randomUser.id,
                },
            });
            console.log(`User ${randomUser.email} liked ${user.email}`);
        }
    });
}
function abhirajLike() {
    return __awaiter(this, void 0, void 0, function* () {
        const abhiraj = yield prisma.user.findFirst({
            where: {
                email: "sumitjha.gcp@gmail.com",
            },
        });
        console.log(abhiraj);
        const user = yield prisma.user.findFirst({
            where: {
                email: "sj779619@gmail.com",
            },
        });
        console.log(user);
        if (abhiraj && user) {
            yield prisma.liked.create({
                data: {
                    liked_to_id: user.id,
                    liked_by_id: abhiraj.id,
                },
            });
            console.log(`Abhiraj liked ${user.email}`);
        }
        else {
            console.error("User(s) not found");
        }
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // for (let i = 0; i < 20; i++) {
            //   await main();
            // }
            yield abhirajLike();
        }
        catch (err) {
            console.error("Error:", err);
        }
        finally {
            yield prisma.$disconnect();
            console.log("done all");
        }
    });
}
run();
