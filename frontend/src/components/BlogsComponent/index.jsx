import React, { useContext } from "react";
import BlogCard from "../BlogCard";
import "./index.scss";
import { fetchContext } from "../../contexts/FetchContext";

function BlogsComponent() {
  const { blogsData } = useContext(fetchContext);

  return (
    <>
      <div className="blogs">
        <div className="container">
          <div className="blogs__header">Blogs</div>
          <div className="blogs__body">
            {blogsData &&
              blogsData.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsComponent;
