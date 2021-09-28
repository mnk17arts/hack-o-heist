import React, { useState } from 'react';
import './sponsors.css';
import mask from './spimg/mask.png';
import aws from './spimg/aws.png';
import github from './spimg/github.png';
import linkedin from './spimg/linkedin.png';

const spox_data = [
  {
    id: 1,
    s_name: "Amazon Web Services",
    s_logo: aws,
    s_info: "SRH needs 68 runs in 58 balls to win"
  },
  {
    id: 2,
    s_name: "Github",
    s_logo: github,
    s_info: "SRH needs 68 runs in 58 balls to win"
  },
  {
    id: 3,
    s_name: "linkedin",
    s_logo: linkedin,
    s_info: "SRH needs 68 runs in 58 balls to win"
  },
  {
    id: 4,
    s_name: "Amazon Web Services",
    s_logo: aws,
    s_info: "SRH needs 68 runs in 58 balls to win"
  },
  {
    id: 5,
    s_name: "Github",
    s_logo: github,
    s_info: "SRH needs 68 runs in 58 balls to win"
  },
  {
    id: 6,
    s_name: "linkedin",
    s_logo: linkedin,
    s_info: "SRH needs 68 runs in 58 balls to win"
  },
  {
    id: 7,
    s_name: "linkedin",
    s_logo: linkedin,
    s_info: "SRH needs 68 runs in 58 balls to win"
  },
]

const Sponsor = (props) => {
  return (
    <div className="spox">
      <div className="spox_logo">
        <img src={props.imgurl} width="80px" alt={props.s_name} />
      </div>
      <div className="spox_name">
        {props.s_name}
      </div>
      <div className="spox_info" hidden="true">
        {props.s_info}
      </div>
    </div>
  )
}

const Sponsors = () => {

  const [sdanger, setSdanger] = useState(false);

  return (
    <div className="sp_parent">
      <div className="sp_me">
        <div className="sp_big_child">
          <div className="sp_name">SPONSORS</div>
        </div>
        <div className="sp_child">
          <img src={mask} alt="" style={
            sdanger ? { width: "25%", transform: "translateX(0%)", transition: "0.8s" }
              : { width: "25%", transform: "translateX(-100%)", transition: "0.8s" }
          } />
          <div className="sp_child_fav_bag" onMouseOver={() => { setSdanger(true) }} onMouseOut={() => { setSdanger(false) }} >
            {
              spox_data.map((_, i) => {
                if (i === 0 || i % 3 === 0) {
                  return (
                    <div className="sp_child_fav_bag_zip_even">
                      <Sponsor 
                      imgurl={spox_data[i].s_logo} 
                      s_name={spox_data[i].s_name}
                      s_info={spox_data[i].s_info} />
                    </div>
                  )
                }else if(i%3 === 1){
                  return (
                    <div className="sp_child_fav_bag_zip_odd">
                      <Sponsor 
                      imgurl={spox_data[i].s_logo} 
                      s_name={spox_data[i].s_name}
                      s_info={spox_data[i].s_info} />
                      <Sponsor 
                      imgurl={spox_data[i+1].s_logo} 
                      s_name={spox_data[i+1].s_name}
                      s_info={spox_data[i+1].s_info} />
                    </div>
                  )
                }else{
                  return( <> </> )
                }
              })
            }
          </div>
          <img src={mask} alt="" style={
            sdanger ? { width: "25%", transform: "translateX(0%)", transition: "0.8s" }
              : { width: "25%", transform: "translateX(100%)", transition: "0.8s" }
          } />
        </div>
        <div className="sp_big_child">
          <div className="sp_name">COMMUNITY SPONSORS</div>
        </div>
        <div className="sp_child">
          <img src={mask} alt="" style={
            sdanger ? { width: "25%", transform: "translateX(0%)", transition: "0.8s" }
              : { width: "25%", transform: "translateX(-100%)", transition: "0.8s" }
          } />
          <div className="sp_child_fav_bag" onMouseOver={() => { setSdanger(true) }} onMouseOut={() => { setSdanger(false) }} >
          {
              spox_data.map((_, i) => {
                if (i === 0 || i % 3 === 0) {
                  return (
                    <div className="sp_child_fav_bag_zip_even">
                      <Sponsor 
                      imgurl={spox_data[i].s_logo} 
                      s_name={spox_data[i].s_name}
                      s_info={spox_data[i].s_info} />
                    </div>
                  )
                }else if(i%3 === 1){
                  return (
                    <div className="sp_child_fav_bag_zip_odd">
                      <Sponsor 
                      imgurl={spox_data[i].s_logo} 
                      s_name={spox_data[i].s_name}
                      s_info={spox_data[i].s_info} />
                      <Sponsor 
                      imgurl={spox_data[i+1].s_logo} 
                      s_name={spox_data[i+1].s_name}
                      s_info={spox_data[i+1].s_info} />
                    </div>
                  )
                }else{
                  return( <> </> )
                }
              })
            }
          </div>
          <img src={mask} alt="" style={
            sdanger ? { width: "25%", transform: "translateX(0%)", transition: "0.8s" }
              : { width: "25%", transform: "translateX(100%)", transition: "0.8s" }
          } />
        </div>
        <div className="sp_small_child">
        </div>
      </div>
    </div>
  )
}

export default Sponsors;