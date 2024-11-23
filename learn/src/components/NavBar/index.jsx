import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/media/hrNetLogo.webp";
import "./index.css";

const NavBar = ({ active }) => {
  return (
    <nav>
      <img src={logo} alt="hrnet logo" />
      <ul>
        <li>
          <Link to="/" className={active === "home" ? "active" : ""}>
            Add an employee
          </Link>
        </li>
        <li>
          <Link to="list" className={active === "list" ? "active" : ""}>
            View employee list
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
