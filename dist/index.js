"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const user_1 = require("./routes/user");
const feed_1 = require("./routes/feed");
const liked_1 = require("./routes/liked");
const match_1 = require("./routes/match");
const message_1 = require("./routes/message");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/user", user_1.userRoutes);
app.use("/api/v1/feed", feed_1.feedRoutes);
app.use("/api/v1/liked", liked_1.likedUser);
app.use("/api/v1/match", match_1.matchRoutes);
app.use("/api/v1/message", message_1.messageRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
