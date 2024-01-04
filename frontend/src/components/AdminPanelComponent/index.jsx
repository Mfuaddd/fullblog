import React, { useContext } from "react";
import "./index.scss";
import AdminPanelCardComponent from "../AdminPanelCardComponent";
import { fetchContext } from "../../contexts/FetchContext";

function AdminPanelComponent() {
  const { blogsData, getBlogsData } = useContext(fetchContext);

  const handleRefresh = async () => {
    await getBlogsData();
  };
  return (
    <div className="panel">
      <div className="container">
        <div className="panel__header">
          <div className="panel__title">Admin Panel</div>
          <div className="panel__control">
            <button onClick={handleRefresh}>Refresh</button>
            <button>Add</button>
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
