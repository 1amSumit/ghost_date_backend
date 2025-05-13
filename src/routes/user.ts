import { Router } from "express";
import { PrismaClient } from "../generated/prisma";
import { userSingupTypes } from "../types";

const prismaClient = new PrismaClient();

const routes = Router();

routes.post("/", async (req, res) => {
  const body = await req.body;
  const parsedData = userSingupTypes.safeParse(body);
  console.log(parsedData.data?.username);
  console.log(parsedData.data?.email);
  console.log(parsedData.data?.password);

  res.status(200).json({
    message: "signup successfull",
  });
});

export const userRoutes = routes;
