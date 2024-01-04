import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import { blogsRouter } from "./src/Router/BlogsRouter.js";
import { LoggerMiddleware } from "./src/Middleware/LoggerMiddleware.js";

const app = express();
const port = 3100;

app.use(express.json())
app.use(cors())

app.use("/blogs",LoggerMiddleware,blogsRouter)

mongoose
  .connect("mongodb+srv://mi6vyr5cb:mi6vyr5cb@cluster0.wireeb6.mongodb.net/")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
