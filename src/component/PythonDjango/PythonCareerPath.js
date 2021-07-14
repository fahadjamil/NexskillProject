import React from "react";
import './PythonCareerPath.css';
import careerpic from "../Images/career.png";

const PythonCareerPath=()=>{
    return (
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 mt-2">
              <h1 className="pt-5 description-heading">Career Paths</h1>
              <p className="pt-2 pr-3 description-text">
              Become a Django web developer.
              </p>
            </div>
            <div className="col-md-6 ">
              <img className="career-pic" src={careerpic} />
            </div>
          </div>
        </div>
      );

};
export default PythonCareerPath;