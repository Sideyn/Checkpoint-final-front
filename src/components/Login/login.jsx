import React from "react";
import "./login.css";

function login() {
  return (
    <div className="Login">
      <div className="connection_container">

        <h2>LOGIN</h2>
        <hr className="hr_login" />
        
        <div className="connection_container_input">
          <form className="form_login">
            <label htmlFor="mail">
              <input type="email" placeholder="EMAIL" />
            </label>

            <label htmlFor="password">
              <input type="password" placeholder="MOT DE PASSE" />
            </label>

            <button type="submit" className="button_login">
            ENTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
