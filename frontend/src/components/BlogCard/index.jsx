import React from "react";
import "./index.scss";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="blog-card__title">{blog.title}</div>
      <div className="blogs-card__text">{blog.text}</div>
    </div>
  );
}

export default BlogCard;
