import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./img/robotics-logo.png";
export default function Navbar(props) {
  useEffect(() => {
    setBorder1(true);
    if (props.active === 0) {
      showBorder1(true);
    } else if (props.active === 1) {
      showBorder2(true);
    } else if (props.active === 2) {
      showBorder3(true);
    } else if (props.active === 3) {
      showBorder4(true);
    } else if (props.active === 4) {
      showBorder5(true);
    } else if (props.active === 5) {
      showBorder6(true);
    }
  }, [props.active]);
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);
  const [border4, setBorder4] = useState(false);
  const [border5, setBorder5] = useState(false);
  const [border6, setBorder6] = useState(false);

  const [sideBar, setSideBar] = useState(false);

  const setsideBar = () => {
    return sideBar ? setSideBar(false) : setSideBar(true);
  };

  const showBorder1 = () => {
    setBorder2(false);
    setBorder3(false);
    setBorder4(false);
    setBorder5(false);
    setBorder6(false);
    return setBorder1(true);
  };
  const showBorder2 = () => {
    setBorder1(false);
    setBorder3(false);
    setBorder4(false);
    setBorder5(false);
    setBorder6(false);
    return setBorder2(true);
  };
  const showBorder3 = () => {
    setBorder1(false);
    setBorder2(false);
    setBorder4(false);
    setBorder5(false);
    setBorder6(false);
    return setBorder3(true);
  };
  const showBorder4 = () => {
    setBorder1(false);
    setBorder2(false);
    setBorder3(false);
    setBorder5(false);
    setBorder6(false);
    return setBorder4(true);
  };
  const showBorder5 = () => {
    setBorder1(false);
    setBorder2(false);
    setBorder3(false);
    setBorder4(false);
    setBorder6(false);
    return setBorder5(true);
  };
  const showBorder6 = () => {
    setBorder1(false);
    setBorder2(false);
    setBorder3(false);
    setBorder4(false);
    setBorder5(false);
    return setBorder6(true);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className={sideBar ? "toggleSidebar list" : "list"}>
        <ul>
          <li onClick={showBorder1}>
            <a href="#home">
              <span className={border1 ? "borderRed" : ""}>Home</span>
            </a>
          </li>
          <li onClick={showBorder2}>
            <a href="#tracks">
              <span className={border2 ? "borderRed" : ""}>Tracks</span>
            </a>
          </li>
          <li onClick={showBorder3}>
            <a href="#prize">
              <span className={border3 ? "borderRed" : ""}>Prize</span>
            </a>
          </li>
          <li onClick={showBorder4}>
            <a href="#schedule">
              <span className={border4 ? "borderRed" : ""}>Schedule</span>
            </a>
          </li>
          <li onClick={showBorder5}>
            <a href="#faq">
              <span className={border5 ? "borderRed" : ""}>FAQ</span>
            </a>
          </li>
          <li onClick={showBorder6}>
            <a href="#register">
              <span className={border6 ? "borderRed" : ""}>Register</span>
            </a>
          </li>
        </ul>
      </div>

      <div class={sideBar ? "burger toggle" : "burger"} onClick={setsideBar}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
  );
}
