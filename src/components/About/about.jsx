import React from "react";
import Search from "/src/components/Searchbar/searchbar.jsx";
import Cards from "/src/components/Cards/cards.jsx";
import "./about.css";

function About() {
  return (
    <>
      <div className="box">
        <h1 className="aboutheading">Find great places to work</h1>
        <Search />
        <div className="cardsdiv">
          <Cards
            company="mailchimp"
            days="4"
            genre="Design"
            job="Senior Developer-Singapore"
            applied="80"
            capacity="100"
          />
          <Cards
            company="behance"
            days="4"
            genre="Programming"
            job="Senior Programmer-India"
            applied="10"
            capacity="20"
          />
          <Cards
            company="dribbble"
            days="2"
            genre="Design"
            job="Junior Designer-America"
            applied="60"
            capacity="80"
          />
          <Cards
            company="google"
            days="2"
            genre="Design"
            job="Software Developer-Syria"
            applied="70"
            capacity="80"
          />
          <Cards
            company="mailchimp"
            days="6"
            genre="Programmer"
            job="Junior Analyst-N.Korea"
            applied="3"
            capacity="10"
          />
          <Cards
            company="amazon"
            days="2"
            genre="Programming"
            job="Junior Programmer-Argentina"
            applied="40"
            capacity="80"
          />
          <Cards
            company="mailchimp"
            days="9"
            genre="Design"
            job="Junior Developer-India"
            applied="26"
            capacity="80"
          />
          <Cards
            company="behance"
            days="9"
            genre="Photographer"
            job="Senior Photographer-Antartica"
            applied="2"
            capacity="30"
          />
        </div>
      </div>
    </>
  );
}

export default About;
