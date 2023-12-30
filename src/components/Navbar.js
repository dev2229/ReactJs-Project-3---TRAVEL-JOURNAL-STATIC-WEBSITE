import React from "react";
// import trvaellogo from "../image/Travel-PNG-Clipart-plane.png";

export default function Navbar(props){
    return(
        <div className="navbar--container">
            <div className="middle--container">
            <img src={props.img} className="nav--image" alt="nav-imagess"/>
            <span className="nav--p">TRAVEL JOURNAL</span>
            </div>
        </div>
    )
}