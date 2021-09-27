import React from "react";
import "./track.css";
import open from "./open.png";
import healthcare from "./healthcare.png";
import users from "./users.png";
import edu from "./edu.png";
import left from "./left.png";
import Right from "./Right.png";

const Track = () => {
  return (
    <div className="Trackx">
      <img src={left} className="left" alt="left" />
      <img src={Right} className="Right" alt="right" />
      <div className="track_box">
        <div className="box_head Tracks">
          <p>Tracks</p>
        </div>
        <div className="box_body">
          <div className="box Community">
            <h2 className="row-1">
              <img src={users} className="users" alt="right" /> Community
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci</p>
          </div>
          <div className="box Education">
            <h2 className="row-1">
              <img src={edu} className="edu" alt="edu" /> Education
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci</p>
          </div>
          <div className="box Healthcare">
            <h2 className="row-1">
              <img src={healthcare} className="healthcare" alt="healthcare" />{" "}
              Healthcare
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci</p>
          </div>

          <div className="box Open">
            <h2 className="row-1">
              <img src={open} className="open" alt="open" /> Open Innovation
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
