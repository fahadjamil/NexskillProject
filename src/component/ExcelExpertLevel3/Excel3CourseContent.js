import React from "react";
import './Excel3CourseContent.css';

const ReactCourseContent=()=>{
    return (
        <div className="container my-3">
          <h1 className="pt-5 description-heading">Course Content</h1>
          <div className="container mx-5 my-3 px-5">
            <div className="row">
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Concept of Dynamic Dashboard</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Dashboard components</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Getting files from external sources</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Using power Query in excel dashboard</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Using power pivot in excel dashboard</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Using and analyzing the data in data model</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Automation in dashboard</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      );
};
export default ReactCourseContent;