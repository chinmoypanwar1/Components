import React from "react";
import "./contact.css";
import Form from "./src/Components/Form/forms.jsx";

function Contact() {
  return (
    <>
      <div className="boxdiv">
        <h1 className="header">Contact Us</h1>
        <p className="para">Any questions or remarks? Just write a message</p>
        <Form />
      </div>
    </>
  );
}

export default Contact;
