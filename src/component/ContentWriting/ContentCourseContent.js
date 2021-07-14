import React from "react";
import "./ContentCourseContent.css";

const ContentCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Introduction to Content Writing</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Introduction to types of content writing (Assignment) </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Guide lines and tips of content writing</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Difference and connection between 3c’s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCourseContent;
