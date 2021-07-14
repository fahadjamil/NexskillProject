import React from "react";
import "./TextileCareerPath.css";
import careerpic from "../Images/career.png";

const TextileCareerPath = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Outline</h1>
          <p className="pt-2 pr-3 description-text">
            Become a digital textile designer textile design house owner,
            textile design brand owner, textile design manufacturer or course
            instructor.
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} />
        </div>
      </div>
    </div>
  );
};
export default TextileCareerPath;
