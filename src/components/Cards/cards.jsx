import React from "react";
import "./cards.css";

function Cards(props) {
  let logo = `./src/Images/${props.company}.png`;

  return (
    <>
      <div className="cards">
        <img src={logo} />
        <pre className="companyName">
          {props.company}
          <span style={{ fontSize: "10px" }}> {props.days} days ago</span>
        </pre>
        <p className="genre"> {props.genre} </p>
        <h2 className="job"> {props.job} </h2>
        <div className="lineContainer">
          <div
            className="line"
            style={{ width: `${(props.applied / props.capacity) * 100}%` }}
          ></div>
        </div>
        <p className="jobsLeft">
          <span>{props.applied} Applied</span> of {props.capacity} Capacity
        </p>
      </div>
    </>
  );
}

export default Cards;
