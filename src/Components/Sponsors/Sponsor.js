import React, { useState } from "react";
import "./sponsors.css";
import mask from "./spimg/mask.png";
import bitd from "./spimg/bitd.png";
import wolfram from "./spimg/wolfram.png";
import gfg from "./spimg/gfg.svg";
import elastic from "./spimg/elastic.png";
import gmc from "./spimg/gmc.png";
import hover from "./spimg/hover.png";
import mentorx from "./spimg/mentorx.png";
import rtist_logo from "./spimg/rtist-logo.png";
const spox_data = [
  {
    id: 1,
    s_name: "Wolfram",
    s_logo: wolfram,
    s_info: "SRH needs 68 runs in 58 balls to win",
  },
  {
    id: 2,
    s_name: "GeeksforGeeks",
    s_logo: gfg,
    s_info: "SRH needs 68 runs in 58 balls to win",
  },
  {
    id: 3,
    s_name: "Elastic",
    s_logo: elastic,
    s_info: "SRH needs 68 runs in 58 balls to win",
  },
  {
    id: 4,
    s_name: "Give My Certificates",
    s_logo: gmc,
    s_info: "SRH needs 68 runs in 58 balls to win",
  },
  {
    id: 5,
    s_name: "Hover Robotix",
    s_logo: hover,
    s_info: "SRH needs 68 runs in 58 balls to win",
  },
  {
    id: 6,
    s_name: "MentorX",
    s_logo: mentorx,
    s_info: "SRH needs 68 runs in 58 balls to win",
  },
];
const spoc_data = [
  {
    id: 1,
    s_name: "R-Tist NIT Jalandhar",
    s_logo: rtist_logo,
    s_info: "SRH needs 68 runs in 58 balls to win",
  },
  {
    id: 2,
    s_name: "IEEE BIT Deoghar",
    s_logo: bitd,
    s_info: "SRH needs 68 runs in 58 balls to win",
  },
];

const Sponsor = props => {
  return (
    <div className="spox">
      <div className="spox_logo">
        <img
          style={{
            backgroundColor:
              props.s_name === "IEEE BIT Deoghar" ? "#00186F" : "transparent",
          }}
          src={props.imgurl}
          width="80px"
          alt={props.s_name}
        />
      </div>
      <div className="spox_name">{props.s_name}</div>
      <div className="spox_info" hidden="true">
        {props.s_info}
      </div>
    </div>
  );
};

const Sponsors = () => {
  const [sdanger, setSdanger] = useState(false);

  return (
    <div
      className="sp_parent"
      onMouseOver={() => {
        setSdanger(true);
      }}
      onMouseOut={() => {
        setSdanger(false);
      }}
    >
      <div className="sp_me">
        <div className="sp_big_child">
          <div className="sp_name">SPONSORS</div>
        </div>
        <div className="sp_child">
          <img
            src={mask}
            alt=""
            style={
              sdanger
                ? {
                    width: "25%",
                    transform: "translateX(0%)",
                    transition: "0.8s",
                  }
                : {
                    width: "25%",
                    transform: "translateX(-100%)",
                    transition: "0.8s",
                  }
            }
          />
          <div className="sp_child_fav_bag">
            {spox_data.map((_, i) => {
              if (i === 0 || i % 3 === 0) {
                return (
                  <div className="sp_child_fav_bag_zip_even">
                    <Sponsor
                      imgurl={spox_data[i].s_logo}
                      s_name={spox_data[i].s_name}
                      s_info={spox_data[i].s_info}
                    />
                  </div>
                );
              } else if (i % 3 === 1) {
                return (
                  <div className="sp_child_fav_bag_zip_odd">
                    <Sponsor
                      imgurl={spox_data[i].s_logo}
                      s_name={spox_data[i].s_name}
                      s_info={spox_data[i].s_info}
                    />
                    <Sponsor
                      imgurl={spox_data[i + 1].s_logo}
                      s_name={spox_data[i + 1].s_name}
                      s_info={spox_data[i + 1].s_info}
                    />
                  </div>
                );
              } else {
                return <> </>;
              }
            })}
          </div>
          <img
            src={mask}
            alt=""
            style={
              sdanger
                ? {
                    width: "25%",
                    transform: "translateX(0%)",
                    transition: "0.8s",
                  }
                : {
                    width: "25%",
                    transform: "translateX(100%)",
                    transition: "0.8s",
                  }
            }
          />
        </div>
        <div className="sp_big_child">
          <div className="sp_name">COMMUNITY PARTNERS</div>
        </div>
        <div className="sp_child">
          <img
            src={mask}
            alt=""
            style={
              sdanger
                ? {
                    width: "25%",
                    transform: "translateX(0%)",
                    transition: "0.8s",
                  }
                : {
                    width: "25%",
                    transform: "translateX(-100%)",
                    transition: "0.8s",
                  }
            }
          />
          <div className="sp_child_fav_bag">
            {spoc_data.map((_, i) => {
              return (
                <div className="sp_child_fav_bag_zip_even">
                  <Sponsor
                    imgurl={spoc_data[i].s_logo}
                    s_name={spoc_data[i].s_name}
                    s_info={spoc_data[i].s_info}
                  />
                </div>
              );
            })}
          </div>
          <img
            src={mask}
            alt=""
            style={
              sdanger
                ? {
                    width: "25%",
                    transform: "translateX(0%)",
                    transition: "0.8s",
                  }
                : {
                    width: "25%",
                    transform: "translateX(100%)",
                    transition: "0.8s",
                  }
            }
          />
        </div>
        <div className="sp_small_child"></div>
      </div>
    </div>
  );
};

export default Sponsors;
