import React from "react";
import git from "../../assets/git.png";
import link from "../../assets/link.png";
import "./footer.css";

function footer() {
  return (
    <div className="Footer">
      <hr className="hr_footer" />
      <section className="logo_container">
        <h4>Contact</h4>

        <a
          href="https://github.com/Sideyn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <img src={git} alt="git" className="logo" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/sidney-croset-375b18223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <img src={link} alt="git" className="logo" />
          </span>
        </a>
      </section>
    </div>
  );
}

export default footer;
