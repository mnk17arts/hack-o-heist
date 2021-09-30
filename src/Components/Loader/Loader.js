import React from "react";
import "./Loader.css";
import logo from "../Register/img/logo4.png";

const Loader = () => {
  return (
    <div id="caseBlanche">
      <div className="caseLoad">
        <div id="rond">
          <div id="test"></div>
        </div>
        <div className="img-load">
          <img src={logo} alt="" width="250" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
