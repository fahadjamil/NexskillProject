import React from "react";
import "./KindleCourseContent.css";

const KindleCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Introduction to Kindle</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Business Model</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Investment Requirements</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Requirements to open Account</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Payment Gateways</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Polices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KindleCourseContent;
