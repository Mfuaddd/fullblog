import React, { useContext, useEffect } from "react";
import AdminPanelComponent from "../../components/AdminPanelComponent";
import { fetchContext } from "../../contexts/FetchContext";

function AdminPanelPage() {
  const { getBlogsData } = useContext(fetchContext);
  useEffect(() => {
    getBlogsData();
  }, []);
  return (
    <>
      <AdminPanelComponent />
    </>
  );
}

export default AdminPanelPage;
