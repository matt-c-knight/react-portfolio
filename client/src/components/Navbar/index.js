import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            <ul>
                <li className="nav"><Link to="/">Home</Link></li>
                <li className="nav"><Link to="/articles">Projects</Link></li>
                <li className="nav"><Link to="/contacts">About Me</Link></li>
                <li className="nav"><Link to="/will">Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;