import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css'
import logo from "./img/robotics-logo.png";
export default function Navbar() {
    useEffect(()=>{
        setBorder1(true);
    },[])
    const [border1, setBorder1] = useState(false)
    const [border2, setBorder2] = useState(false)
    const [border3, setBorder3] = useState(false)
    const [border4, setBorder4] = useState(false)

    const showBorder1 = () => {setBorder1(true); setBorder3(false); setBorder4(false); return setBorder2(false);}
    const showBorder2 = () => {setBorder1(false); setBorder3(false); setBorder4(false); return setBorder2(true);}
    const showBorder3 = () => {setBorder1(false); setBorder2(false); setBorder4(false); return  setBorder3(true);}
    const showBorder4 = () => {setBorder1(false); setBorder2(false); setBorder3(false); return setBorder4(true);}

    return (
        <div className="navbar">
            <img src={ logo } alt="logo" className="logo" />

            <div className="list">
            <ul>
                <li onClick={showBorder1} >
                    <Link to="#home">
                        <span className={border1 ? "borderRed" : ""}>Home</span>
                    </Link>
                </li>
                <li onClick={showBorder2}>
                    <Link to="#about">
                        <span className={border2 ? "borderRed" : ""}>Projects</span>
                    </Link>
                </li>
                <li onClick={showBorder3}>
                    <Link to="/">
                        <span className={border3 ? "borderRed" : ""}>Register</span>
                    </Link>
                </li>
                <li onClick={showBorder4}>
                    <Link to="/">
                        <span className={border4 ? "borderRed" : ""}>Prize</span>
                    </Link>
                </li>
            </ul>
        </div>
        </div>
    )
}
