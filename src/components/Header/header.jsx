import React from "react";
import Nav from "/home/sidney/checkpoint-final/front/src/components/Nav/nav.jsx";
import "./header.css";

function header() {
  return (
    <div className="Header">
      <h1>PORTFOLIO</h1>
      <hr className="hr_header" />
      <Nav />
      <hr className="hr_2_header" />
    </div>
  );
}

export default header;
