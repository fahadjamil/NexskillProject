import React from "react";
import "./SpokenEnglishCareerPath.css";
import careerpic from "../Images/career.png";

const SpokenEnglishCareerPath = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Outline</h1>
          <p className="pt-2 pr-3 description-text">
            Learning how to speak English fluently can increase your chances to
            get a job, participate in discussions and debates, give speeches and
            improve your networking skills.
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} />
        </div>
      </div>
    </div>
  );
};
export default SpokenEnglishCareerPath;
