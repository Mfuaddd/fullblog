import { Schema, model } from "mongoose";

const blogsSchema = new Schema({
  title: String,
  text: String,
},{ timestamps: true });

export const blogsModel = model("Blogs", blogsSchema);
