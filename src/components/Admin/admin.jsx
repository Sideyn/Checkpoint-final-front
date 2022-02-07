/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

function admin() {
  const [project, setProject] = useState({
    title: "",
    link: "",
    description: "",
    assets_id: "",
  });

  const [projects, setProjects] = useState([]);
  const [assets, setAssets] = useState([]);
  const [assetFile, setAssetFile] = useState();

  const [projectID, setProjectID] = useState();
  const [projectDelete, setProjectDelete] = useState();

  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("Error");
  const [alertDelete, setAlertDelete] = useState(false);
  const [status, setStatus] = useState("");

  const [actionType, setActionType] = useState("add");
  const [submitType, setSubmitType] = useState("");

  const getAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`)
      .then((resp) => {
        console.log("projects", resp.data);
        return setProjects(resp.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  const getAllAssets = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/assets`)
      .then((resp) => {
        console.log("assets", resp.data);
        return setAssets(resp.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    getAllAssets();
    getAllProjects();
  }, []);

  const handleDeleteProject = async () => {
    if (projectDelete === projectID) {
      setAlertMsg("Error");
      setAlert(true);
    } else {
      try {
        await axios
          .delete(
            `${process.env.REACT_APP_BACKEND_URL}/api/projects/${projectDelete}`,
            {
              withCredentials: true,
            }
          )
          .then((resp) => {
            console.log(resp);
            setAlertDelete(false);
            getAllProjects();
            setStatus("Project deleted");
          });
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  const handleNewAsset = (e) => {
    console.log(e.target.files[0]);
    const selectedAsset = e.target.files[0];
    const { type } = selectedAsset;
    if (type !== "image/png" && type !== "image/jpg" && type !== "image/jpeg") {
      setAssetFile();
      setAlertMsg("Please select a .png or .jpeg image or a .mp4 video");
      setAlert(true);
    } else {
      setAssetFile(e.target.files[0]);
      console.log(assetFile);
    }
  };

  const handleProjectSubmit = async () => {
    console.log("project", project);

    if (actionType === "ajouter") {
      if (!project.title) {
        setAlertMsg("Please provide an project title");
        setAlert(true);
      } else {
        try {
          await axios
            .post(
              `${process.env.REACT_APP_BACKEND_URL}/api/projects`,
              project,
              {
                withCredentials: true,
              }
            )
            .then((resp) => {
              console.log("project", resp);
              getAllProjects();
              setStatus("Project created");
            });
        } catch (err) {
          console.log(err.response.data);
          setStatus("Error when creating the event");
        }
      }
    } else {
      setAlertMsg("Please click on add");
      setAlert(true);
    }
  };

  return (
    <div className="Admin">
      <div className="projectAdmin">
        <div className="board_container">
          <h2>ADMIN</h2>
          <hr className="hr_admin" />

          <section className="board_container_input">
            <form className="form_admin">
              <label htmlFor="title">
                <h4>Title :</h4>
                <input
                  type="text"
                  placeholder="TITLE"
                  value={project.title}
                  onChange={(e) =>
                    setProject({ ...project, title: e.target.value })
                  }
                />
              </label>
              <h4>Link :</h4>
              <label htmlFor="link">
                <input
                  type="text"
                  placeholder="LINK"
                  value={project.link}
                  onChange={(e) =>
                    setProject({ ...project, link: e.target.value })
                  }
                />
              </label>
              <h4>Description :</h4>
              <label htmlFor="description">
                <textarea
                  name="description"
                  placeholder="DESCRIPTION"
                  value={project.description}
                  onChange={(e) =>
                    setProject({ ...project, description: e.target.value })
                  }
                />
              </label>
            </form>

            <form className="add_form" onSubmit={handleProjectSubmit}>
              <label htmlFor="select-asset">
                <select name="asset" className="buttons">
                  <option>Choose one image</option>
                  {assets.map((asset) => (
                    <option
                      value={asset.id}
                      onClick={(e) => {
                        handleNewAsset(e);
                      }}
                    >
                      {asset.id}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="buttons"
                onClick={() => setSubmitType("form")}
              >
                VALIDATE
              </button>
            </form>
          </section>
        </div>

        <div className="container_admin">
          {alertDelete ? (
            <div className="delete">
              <section className="delete-alert">
                Do you want to delete this project ?
                <button
                  type="button"
                  className="button_add"
                  onClick={handleDeleteProject}
                >
                  VALIDER
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    setAlertDelete(false);
                  }}
                >
                  ANNULER
                </button>
              </section>
            </div>
          ) : null}
        </div>

        {status ? <h5>{status}</h5> : null}
      </div>
    </div>
  );
}

export default admin;
