import React from "react";
import "./Prizes.css";
import prize1 from "./prize1.svg";
import prize2 from "./prize2.svg";
import prize3 from "./prize3.svg";
import prize4 from "./prize4.svg";

const Prizes = () => {
  return (
    <div className="Prizes" id="prize">
      {/* <img src={TopSVG} alt=""/> */}
      <h1 className="h_name">Prizes</h1>
      <div className="PrizesContainer">
        <div className="cont1">
          <img src={prize2} alt="" />
        </div>
        <div className="cont1">
          <img src={prize1} alt="" />
        </div>
        <div className="cont1">
          <img src={prize3} alt="" />
        </div>
        <div className="cont1">
          <img src={prize4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
