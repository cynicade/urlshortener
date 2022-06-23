import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import mongoose from "mongoose";

const app = express();
// use json body parser middleware
app.use(express.json());
// use cors middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:3000"
        : "https://cynicade.xyz/urls",
  })
);
// use router
app.use("/api", router);

// connect to database
const mongoURI =
  process.env.NODE_ENV === "dev"
    ? process.env.MONGO_URI_LOCAL
    : `${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URI}`;
mongoose.connect(`mongodb://${mongoURI}/urls`, (err) => {
  if (err) console.error("Could not connect to DB", err);
  else console.log("Connected to database");
});

const port = process.env.NODE_ENV === "dev" ? 3001 : process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
