import React from "react";
import "./StartLearning.css";

const StartLearning = () => {
  return (
    <div className=" ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
              <div className="m-5">
            <div className="learning-heading ">Start Learning.</div>
            <div className=" learning-content-1 mt-4">
              Best IT Institution/University /College/Company In Lahore Pakistan
            </div>
            <div className="learning-content-2 mt-4">
              At NeXskill we believe that talent is universal and everyone has a
              right to world class education but opportunities like that are
              scare and not easily accessible in Pakistan.
            </div>
            <div className="learning-content-btn d-flex mt-4 align-items-center justify-content-center">
              Learn More
            </div>
            </div>
          </div>
          <div className="col-md-7 learning"></div>
        </div>
      </div>
    </div>
  );
};
export default StartLearning;
