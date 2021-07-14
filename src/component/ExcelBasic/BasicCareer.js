import React from "react";
import careerpic from "../Images/character.png";
import "./BasicCareer.css";

const BasicCareer = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Paths</h1>
          <p className="pt-2 pr-3 description-text">
            Microsoft Excel is used in every field from Data Analysis to
            Finance, HR, and Operations etc. Therefore, everyone should be
            familiar with excel knowledge to get the job done.
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} alt="careerPic" />
        </div>
      </div>
    </div>
  );
};

export default BasicCareer;
