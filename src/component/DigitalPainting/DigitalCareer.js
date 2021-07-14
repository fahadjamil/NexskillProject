import React from "react";
import "./DigitalCareer.css";
import careerpic from "../Images/digital.png";

const DigitalCareer = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Paths</h1>
          <p className="pt-2 pr-3 description-text">
            As a Digital painter, you can opt for career paths as Digital
            painter for all types of characters and environments, caricature
            painter, game artist (digital painting style), concept artist, story
            board artist, environment painter, matte painter and course
            instructor.
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} alt="career"/>
        </div>
      </div>
    </div>
  );
};
export default DigitalCareer;
