import React from 'react'
import './Prizes.css';
import TopSVG from './Vector.svg'
import prizes from './prizes.svg'

const Prizes = () => {
    return (
        <div className="Prizes">
            {/* <img src={TopSVG} alt=""/> */}
            <h1 className="h_name">Prizes</h1>
            <div className="PrizesContainer">
                <div className="cont1">
                    <img src={prizes} alt=""/>
                </div>
                <div className="cont1">
                    <img src={prizes} alt=""/>
                </div>
                <div className="cont1">
                    <img src={prizes} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Prizes
