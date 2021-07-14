import React from "react";
import careerpic from "../Images/character.png";
import "./FullStackCareer.css";

const FullStackCareer = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Paths</h1>
          <p className="pt-2 pr-3 description-text">Become a web developer. </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} alt="careerPic" />
        </div>
      </div>
    </div>
  );
};

export default FullStackCareer;
