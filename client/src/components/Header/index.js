import React, { Component } from "react";
import './style.css';
import { Link } from "react-router-dom";


function Header () {
    return (
        <div className="header">
            <div className="nav">
            <ul>
                <li className="nav"><Link to="/">Home</Link></li>
                <li className="nav"><Link to="/projects">Projects</Link></li>
                <li className="nav"><Link to="/about">About Me</Link></li>
                <li className="nav"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        </div>
    )
}

export default Header;