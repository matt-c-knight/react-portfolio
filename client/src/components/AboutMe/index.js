import React from "react";
import './style.css';
import profile from './profile.jpg';

function AboutMe(props) {
    console.log("Hello", props)
    return (
        <div className="wrapper">
            <h1 className='head'>About Me</h1>
            <img src={profile}/>
        </div>


    );
}

export default AboutMe;