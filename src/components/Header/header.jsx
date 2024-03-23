import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar">
        <ul className="list">
          <li className="listitems">
            <NavLink to="" style={{ color: "white" }}>
              Home
            </NavLink>
          </li>
          <li className="listitems">
            <NavLink to="/about" style={{ color: "white" }}>
              About
            </NavLink>
          </li>
          <li className="listitems">
            <NavLink to="/contact" style={{ color: "white" }}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
