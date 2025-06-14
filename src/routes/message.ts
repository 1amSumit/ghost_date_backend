import { Router } from "express";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";

const prismaClient = new PrismaClient();
const router = Router();

router.post("/send-message/:roomId", async (req, res) => {});
