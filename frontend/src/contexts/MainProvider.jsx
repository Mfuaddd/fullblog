import React from "react";
import FetchContext from "./FetchContext";

function MainProvider({ children }) {
  return (
    <>
      <FetchContext>{children}</FetchContext>
    </>
  );
}

export default MainProvider;
