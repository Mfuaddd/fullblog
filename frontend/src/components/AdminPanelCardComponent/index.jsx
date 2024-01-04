import React from "react";
import "./index.scss";
import { useContext } from "react";
import { fetchContext } from "../../contexts/FetchContext";

function AdminPanelCardComponent({ blog }) {
  const { deleteBlogByID, getBlogsData } = useContext(fetchContext);

  const handleDelete = async () => {
    await deleteBlogByID(blog._id);
    await getBlogsData();
  };
  return (
    <div className="panel-card">
      <div className="panel-card__blog">
        <div className="panel-card__title">{blog.title}</div>
        <div className="panel-card__text">{blog.text}</div>
        <div>...</div>
      </div>
      <div className="panel-card__control">
        <div className="panel-card__edit panel-card__btn">Edit</div>
        <div
          className="panel-card__delete panel-card__btn"
          onClick={handleDelete}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default AdminPanelCardComponent;
