import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Routes from "./routes";
dotenv.config();

const { PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Routes);
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.f17rva1.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error in database conection", err);
  });

const server = app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
server.on("error", (err) => {
  console.log("Error: ", err);
});
