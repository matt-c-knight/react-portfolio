import React from "react";
import ContactPage from "../components/ContactPage";

class Contact extends React.Component {

render() {
    console.log("Good afternoon")
    
    return (
        <div className="container">
            <ContactPage />
        </div>
    )
}

}

export default Contact;