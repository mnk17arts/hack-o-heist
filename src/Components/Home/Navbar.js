import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./img/robotics-logo.png";
export default function Navbar() {
  useEffect(() => {
    setBorder1(true);
  }, []);
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);
  const [border4, setBorder4] = useState(false);

  const showBorder1 = () => {
    setBorder1(true);
    setBorder3(false);
    setBorder4(false);
    return setBorder2(false);
  };
  const showBorder2 = () => {
    setBorder1(false);
    setBorder3(false);
    setBorder4(false);
    return setBorder2(true);
  };
  const showBorder3 = () => {
    setBorder1(false);
    setBorder2(false);
    setBorder4(false);
    return setBorder3(true);
  };
  const showBorder4 = () => {
    setBorder1(false);
    setBorder2(false);
    setBorder3(false);
    return setBorder4(true);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="list">
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
            <a href="#register">
              <span className={border3 ? "borderRed" : ""}>Register</span>
            </a>
          </li>
          <li onClick={showBorder4}>
            <a href="#prize">
              <span className={border4 ? "borderRed" : ""}>Prize</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
