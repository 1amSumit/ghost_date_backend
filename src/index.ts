import express from "express";
import "dotenv/config";
import { userRoutes } from "./routes/user";
import { feedRoutes } from "./routes/feed";

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/feed", feedRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
