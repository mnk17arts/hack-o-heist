import React from 'react'
import './Loader.css'
import logo from "../Register/img/logo4.png";

const Loader = () => {
    return (
        <div id="caseBlanche">
            <div>
                <div id="rond">
                    <div id="test"></div>
                </div>
                <div id="load">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Loader
