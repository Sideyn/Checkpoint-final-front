import React, { useEffect, useState } from "react";
import axios from "axios";
import "./project.css";

function project() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`)
      .then((resp) => {
        console.log("projects", resp.data);
        return setProjects(resp.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="Project">
      <h2>PROJECTS</h2>
      <hr className="hr_project" />

      {projects.map((project) => (
        <>
          <div className="container_piture">
            {project?.assets && (
              <img
                src={`{process.env.REACT_APP_BACKEND_URL}/${project.assets[0].source}`}
                alt={`project: ${project.title}`}
              />
            )}
          </div>
          <section className="container_infos">
            <div className="box_project">
              <h4>Title:</h4>
              <p id="opacity">{project.title}</p>
            </div>
            <div className="box_project">
              <h4>Link:</h4>
              <p id="opacity">{project.link}</p>
            </div>
            <div className="box_project">
              <h4>Description:</h4>
              <p id="opacity">{project.description}</p>
            </div>
          </section>
        </>
      ))}
    </div>
  );
}

export default project;
