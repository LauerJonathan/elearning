import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/media/hrNetLogo.webp";
import "./index.css";

const NavBar = ({ active }) => {
  return (
    <nav>
      <img src={logo} alt="hrnet logo" />
      <ul>
        <li className={active === "home" ? "active" : ""}>
          <Link to="/">
            Add an employee
          </Link>
        </li>
        <li className={active === "list" ? "active" : ""}>
          <Link to="list">
            View employee list
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
