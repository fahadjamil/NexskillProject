import React from "react";
import "./AnimationCourseContent.css";

const AnimationCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Introducing Design & Animation </p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Vector based Design</p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Rasterized based Design & UI Design</p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>2D Animation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationCourseContent;
