import React from "react";
import careerpic from "../Images/character.png";
import "./AndroidCareer.css";

const AndroidCareer = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Paths</h1>
          <p className="pt-2 pr-3 description-text">
            Become an Android application developer and create business
            applications.
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} alt="careerPic" />
        </div>
      </div>
    </div>
  );
};

export default AndroidCareer;
