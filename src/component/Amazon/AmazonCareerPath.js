import React from "react";
import './AmazonCareerPath.css';
import careerpic from "../Images/career.png";

const AmazonCareerPath=()=>{
    return (
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 mt-2">
              <h1 className="pt-5 description-heading">Career Paths</h1>
              <p className="pt-2 pr-3 description-text">
              Become a virtual assistant and complete tasks related to your Amazon business 
              </p>
            </div>
            <div className="col-md-6 ">
              <img className="career-pic" src={careerpic} />
            </div>
          </div>
        </div>
      );
};
export default AmazonCareerPath;