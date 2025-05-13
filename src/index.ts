import express from "express";
import "dotenv/config";
import { userRoutes } from "./routes/user";

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
