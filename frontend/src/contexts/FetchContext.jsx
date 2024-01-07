import React, { createContext, useState } from "react";

export const fetchContext = createContext();

function FetchContext({ children }) {
  const [blogsData, setBlogsData] = useState([]);
  const [userData, setUserData] = useState([]);

  const getBlogsData = async () => {
    const res = await fetch("http://localhost:3100/blogs");
    const data = await res.json();
    setBlogsData(data);
  };

  const getUsersData = async () => {
    const res = await fetch("http://localhost:3100/users");
    const data = await res.json();
    setUserData(data);
  };

  const data = {
    blogsData,
    userData,
    getBlogsData,
    getUsersData,
  };

  return <fetchContext.Provider value={data}>{children}</fetchContext.Provider>;
}

export default FetchContext;
