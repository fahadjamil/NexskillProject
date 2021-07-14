import React from "react";
import careerpic from "../Images/character.png";
import "./AnimationCareer.css";

const AnimationCareer = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Paths</h1>
          <p className="pt-2 pr-3 description-text">
            <ul>
              <li>&nbsp;Animator</li>
              <li>&nbsp;Cartoon creator</li>
              <li>&nbsp;Film creator </li>
            </ul>
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} alt="careerPic" />
        </div>
      </div>
    </div>
  );
};

export default AnimationCareer;
