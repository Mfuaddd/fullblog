import React, { useEffect } from "react";
import BlogsComponent from "../../components/BlogsComponent";
import { useContext } from "react";
import { fetchContext } from "../../contexts/FetchContext";

function HomePage() {
  const { getBlogsData } = useContext(fetchContext);
  useEffect(() => {
    getBlogsData();
  }, []);

  return (
    <>
      <BlogsComponent />
    </>
  );
}

export default HomePage;
