import { Router } from "express";
import {
  deleteBlogByID,
  getAllBlogs,
  getBlogByID,
  postBlog,
  putBlogByID,
} from "../Controller/BlogsController.js";

export const blogsRouter = Router();

blogsRouter.get("/", getAllBlogs);
blogsRouter.get("/:id", getBlogByID);
blogsRouter.post("/", postBlog);
blogsRouter.put("/:id", putBlogByID);
blogsRouter.delete("/:id", deleteBlogByID);
