import React from "react";
import AboutMe from "../components/AboutMe";

class About extends React.Component {

render() {
    console.log("Good afternoon")
    
    return (
        <div className="container">
            <AboutMe />
        </div>
    )
}

}

export default About;