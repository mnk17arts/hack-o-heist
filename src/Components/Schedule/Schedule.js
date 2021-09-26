import React from 'react';
import './schedule.css';
import tl from './simg/tl.png';
import bl from './simg/bl.png';
import tr from './simg/tr.png';
import br from './simg/br.png';
import nairobi from './simg/Nairobi.png'

const Planx = (props) => {
  return (
    <div className={props.classx}>
      <div className="p_heading">
        <div className="mh_tx"><div class="trans">PLAN </div><div className="red">{props.head}</div></div>
        <p> {props.body}</p>
      </div>
    </div>
  )
}

const Schedule = () => {
  return (
    <div className="s_parent">
      <div className="s_me">
        <div className="s_big_child">
          <img src={tl} alt="" style={{ width: "25%" }} />
          <div className="s_name">SCHEDULE</div>
          <img src={tr} alt="" style={{ width: "25%" }} />
        </div>
        <div className="s_child">
          <div className="child_l">
            <Planx classx="planx left" head="1-14 OCT 1" body="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text" />
            <Planx classx="planx left right" head="1-14 OCT 2" body="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text" />
            <Planx classx="planx left" head="1-14 OCT 3" body="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text" />
            <Planx classx="planx left right" head="1-14 OCT 4" body="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text" />
            <Planx classx="planx left" head="1-14 OCT 5" body="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text" />
          </div>
          <img src={nairobi} className="nairobi" alt="" />
          <div className="child_r">
            <Planx classx="planx right" head="1-14 OCT 2" body="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text" />
            <Planx classx="planx right" head="1-14 OCT 4" body="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text" />
          </div>
        </div>
        <div className="s_small_child">
          <img src={bl} alt="" style={{ width: "35%" }} />
          <div className="s_name" data-meaning="mind the dates!" >cuidao con <span style={{color : "#e60909"}}>las fechas!</span></div>
          <img src={br} alt="" style={{ width: "35%" }} />
        </div>
      </div>
    </div>
  )
}

export default Schedule;