import React from "react";
import "./schedule.css";
import tl from "./simg/tl.png";
import bl from "./simg/bl.png";
import tr from "./simg/tr.png";
import br from "./simg/br.png";
import nairobi from "./simg/Nairobi.png";

const Planx = props => {
  return (
    <div className={props.classx}>
      <div className="p_heading">
        <div className="mh_tx">
          <div class="trans">{props.plan} </div>
          <div className="red">{props.head}</div>
        </div>
        <p> {props.body}</p>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="s_parent" id="schedule">
      <div className="s_me">
        <div className="s_big_child">
          <img src={tl} alt="" style={{ width: "25%" }} />
          <div className="s_name">SCHEDULE</div>
          <img src={tr} alt="" style={{ width: "25%" }} />
        </div>
        <div className="s_child">
          <div className="child_l">
            <Planx
              classx="planx left"
              head="28th Sept"
              body="Registration for the Heist begins!"
            />
            <Planx
              classx="planx left right"
              head="15th Oct"
              body="Registration for the Heist ends at midnight!"
            />
            <Planx
              classx="planx left"
              head="16th Oct"
              body="The Heist, begins at 12:01 PM!"
            />
            <Planx
              classx="planx left right"
              head="17th Oct"
              body="The Heist ends at midnight, no submission past this point!"
            />
            <Planx
              classx="planx left"
              head="20th Oct"
              body="Closing Ceremony!"
            />
          </div>
          <img src={nairobi} className="nairobi" alt="" />
          <div className="child_r">
            <Planx
              classx="planx right"
              head="15th Oct"
              body="Registration for the Heist ends at midnight!"
            />
            <Planx
              classx="planx right"
              head="17th Oct"
              body="The Heist ends at midnight, no submission past this point!"
            />
          </div>
        </div>
        <div className="s_small_child">
          <img src={bl} alt="" style={{ width: "35%" }} />
          <div className="s_name" data-meaning="mind the dates!">
            cuidao con <span style={{ color: "#e60909" }}>las fechas!</span>
          </div>
          <img src={br} alt="" style={{ width: "35%" }} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
