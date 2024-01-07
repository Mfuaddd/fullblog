import React, { useState } from "react";
import "./index.scss";
import { useContext } from "react";
import { fetchContext } from "../../contexts/FetchContext";
import { EditBlogByID, deleteBlogByID } from "../../helper/FetchBlogs";
import AdminPanelModalComponent from "../AdminPanelModalComponent";

function AdminPanelCardComponent({ blog }) {
  const { getBlogsData } = useContext(fetchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    await deleteBlogByID(blog._id);
    await getBlogsData();
  };
  return (
    <div className="panel-card">
      {isModalOpen && (
        <AdminPanelModalComponent
          setIsOpen={setIsModalOpen}
          cb={EditBlogByID}
          id={blog._id}
          data={blog}
        />
      )}
      <div className="panel-card__blog">
        <div className="panel-card__title">{blog.title}</div>
        <div className="panel-card__text">{blog.text}</div>
        <div>...</div>
      </div>
      <div className="panel-card__control">
        <div className="panel-card__edit btn" onClick={()=>setIsModalOpen(true)}>Edit</div>
        <div className="panel-card__delete btn" onClick={handleDelete}>
          Delete
        </div>
      </div>
    </div>
  );
}

export default AdminPanelCardComponent;
