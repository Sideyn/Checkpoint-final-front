import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function nav({ handleClick }) {
  return (
    <div className="Nav">
      <ul className="navigation">
        <li>
          <NavLink to="/" className="navLink" onClick={handleClick}>
            {" "}
            Home{" "}
          </NavLink>{" "}
        </li>

        <li>
          <NavLink to="/login" className="navLink" onClick={handleClick}>
            {" "}
            Login{" "}
          </NavLink>{" "}
        </li>

        <li>
          <NavLink to="/admin" className="navLink" onClick={handleClick}>
            {" "}
            Admin{" "}
          </NavLink>{" "}
        </li>

        <li>
          <NavLink to="/projects" className="navLink" onClick={handleClick}>
            {" "}
            Projects{" "}
          </NavLink>{" "}
        </li>

        <li>
          <a
            className="navLink"
            href="https://sideyn.github.io/cv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
      </ul>
    </div>
  );
}

export default nav;
