import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todosRoutes from "./routes/todos.js";

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/todos", todosRoutes);

const mongodb = process.env.MONGODB_URL;

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(mongodb)
  .then(() => {
    app.listen(PORT);
    console.log(`Sever is running on port ${PORT}`);
  })
  .catch((err) => console(err));
