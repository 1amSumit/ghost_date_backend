import express from "express";
import "dotenv/config";
import { userRoutes } from "./routes/user";
import { feedRoutes } from "./routes/feed";
import { likedUser } from "./routes/liked";

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/feed", feedRoutes);
app.use("/api/v1/liked", likedUser);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
