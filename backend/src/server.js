import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactions-route.js";
import job from "./config/cron.js";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") job.start();

// Middleware
app.use(ratelimiter);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/api/healthcheck", (req, res) =>
  res.sendStatus(200).json({ status: "ok" })
);

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
