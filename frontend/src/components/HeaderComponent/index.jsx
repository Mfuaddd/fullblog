import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

function HeaderComponent() {
  return (
    <div className="header">
      <div className="container header__wrapper">
        <div className="header__logo">Blogs.com</div>
        <ul className="header__nav">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/AdminPanel"}>AdminPanel</Link>
          </li>
        </ul>
        <ul className="header__btns">
          <li>
            <Link to={"/"}>Log in</Link>
          </li>
          <li>
            <Link to={"/"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
