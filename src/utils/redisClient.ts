import { createClient } from "redis";

const client = createClient({
  url: "redis://localhost:6379",
});

client.on("error", (err) => console.error("Redis Error:", err));

(async () => {
  await client.connect();
})();

export const redisClient = client;
