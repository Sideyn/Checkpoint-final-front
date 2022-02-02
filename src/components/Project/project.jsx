import React from "react";
import test from "../../assets/test.png";
import "./project.css";

function project() {
  return (
    <div className="Project">
      <h2>PROJECTS</h2>
      <hr className="hr_project" />

      <div className="container_piture">
        <span>
          <img src={test} alt="test" className="test" />
        </span>
      </div>

      <section className="container_infos">
        <div className="box_project">
          <h4>Title:</h4>
          <p id="opacity">Title</p>
        </div>
        <div className="box_project">
          <h4>Link:</h4>
          <p id="opacity">Link</p>
        </div>
        <div className="box_project">
          <h4>Description:</h4>
          <p id="opacity">Description</p>
        </div>
      </section>
    </div>
  );
}

export default project;
