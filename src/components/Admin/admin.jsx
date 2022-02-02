import React from "react";
import "./admin.css";

function admin() {
  return (
    <div className="Admin">
      {" "}
      <section className="space_admin">
        <button type="button" className="add_button">
          AJOUTER
        </button>

        <button type="button" className="delete_button">
          SUPPRIMER
        </button>

        <form className="form_admin">
          <label htmlFor="Title">
            <input type="Title" placeholder="TITLE" />
          </label>

          <label htmlFor="Link">
            <input type="Link" placeholder="LINK" />
          </label>

          <label htmlFor="Description">
            <input type="Description" placeholder="DESCRIPTION" />
          </label>

          <label htmlFor="Description">
            <input type="Description" placeholder="DESCRIPTION" />
          </label>
          
          <label htmlFor="Description">
            <input type="Description" placeholder="DESCRIPTION" />
          </label>
        </form>
      </section>
    </div>
  );
}

export default admin;
