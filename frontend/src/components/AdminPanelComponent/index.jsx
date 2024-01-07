import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import AdminPanelCardComponent from "../AdminPanelCardComponent";
import { fetchContext } from "../../contexts/FetchContext";
import AdminPanelModalComponent from "../AdminPanelModalComponent";
import { AddBlog } from "../../helper/FetchBlogs";

function AdminPanelComponent() {
  const { blogsData, getBlogsData } = useContext(fetchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRefresh = async () => {
    await getBlogsData();
  };
  return (
    <div className="panel">
      {isModalOpen && (
        <AdminPanelModalComponent setIsOpen={setIsModalOpen} cb={AddBlog} />
      )}
      <div className="container">
        <div className="panel__header">
          <div className="panel__title">Admin Panel</div>
          <div className="panel__control">
            <div className="btn" onClick={handleRefresh}>
              Refresh
            </div>
            <div className="btn" onClick={() => setIsModalOpen(true)}>
              Add
            </div>
          </div>
        </div>
        <div className="panel__cards">
          {blogsData &&
            blogsData.map((blog) => (
              <AdminPanelCardComponent key={blog._id} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPanelComponent;
