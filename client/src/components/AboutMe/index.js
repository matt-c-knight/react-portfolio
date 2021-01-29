import React from "react";
import './style.css';

function About(props) {
    console.log("Hello", props)
    return (
        <div className="wrapper">
            <h1 className='head'>About Me</h1>
        </div>


    );
}

export default About;