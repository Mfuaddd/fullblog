import { blogsModel } from "../Model/BlogsModel.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogsModel.find({});
    res.status(200).send(blogs);
  } catch (error) {
    console.error(error);
  }
};

export const getBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogsModel.findById(id);
    res.status(200).send(blog);
  } catch (error) {
    console.error(error);
  }
};

export const postBlog = async (req, res) => {
  try {
    const { title, text } = req.body;
    const newBlog = new blogsModel({ title, text });
    await newBlog.save();
    res.status(200).send("Got a POST request");
  } catch (error) {
    console.error(error);
  }
};

export const putBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    await blogsModel.findByIdAndUpdate(id, { title, text });
    res.status(200).send("Got a PUT request");
  } catch (error) {
    console.error(error);
  }
};

export const deleteBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    await blogsModel.findByIdAndDelete(id);
    res.status(200).send("Got a DELETE request");
  } catch (error) {
    console.error(error);
  }
};
