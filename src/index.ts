import express from "express";
import "dotenv/config";
import { userRoutes } from "./routes/user";
import { feedRoutes } from "./routes/feed";
import { likedUser } from "./routes/liked";
import { matchRoutes } from "./routes/match";

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/feed", feedRoutes);
app.use("/api/v1/liked", likedUser);
app.use("/api/v1/match", matchRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
