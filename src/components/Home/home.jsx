import React from "react";
import Search from "../Searchbar/searchbar";
import "./home.css";

function Home() {
  return (
    <>
      <h1 className="heading">
        Welcome to Job Seeker, where <span>opportunities await</span>! &nbsp;
        &nbsp; &nbsp; Start your journey to the <span>perfect career</span>{" "}
        today.
      </h1>
      <Search />
      <p className="resume">
        Maximize your job prospects! <span>Upload your resume</span> now for
        easier job hunting!
      </p>
      <p className="hiring">
        Simplify hiring! <span>Post jobs</span> easily for productive, dedicated employees.
      </p>
    </>
  );
}

export default Home;
