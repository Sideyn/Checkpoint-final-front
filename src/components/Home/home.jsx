import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="Home">
      <h2>DESCRIPTION</h2>
      <hr className="hr_home_description" />

      <div className="description_container">
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>

      <section className="buttons_container">
        <div className="container_button_projects">
          <NavLink to="/projects">
            <button type="button" className="home_buttons">
              PROJECTS
            </button>
          </NavLink>
        </div>
        <hr className="hr_home" />

        <div className="container_button_cv">
          <button type="button" className="home_buttons">
            <a
              href="https://sideyn.github.io/cv/"
              target="_blank"
              rel="noopener noreferrer"
              id="green_hover"
            >
              CV
            </a>
          </button>
        </div>
        <hr className="hr_2_home" />
      </section>
    </div>
  );
}

export default Home;
