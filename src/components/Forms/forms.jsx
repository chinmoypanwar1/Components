import React from "react";
import "./forms.css";

function Form() {
  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Enter a valid email address"
          className="ifield"
        />
        <input type="text" placeholder="Enter your name" className="ifield" />
      </div>
      <textarea
        cols="30"
        rows="10"
        className="textarea"
        placeholder="Enter your message here"
      />
      <button className="submit">Submit</button>
    </>
  );
}

export default Form;
