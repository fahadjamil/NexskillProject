import React from "react";
import './Excel2CourseContent.css';

const ReactCourseContent=()=>{
    return (
        <div className="container my-3">
          <h1 className="pt-5 description-heading">Course Content</h1>
          <div className="container mx-5 my-3 px-5">
            <div className="row">
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Introduction to Power Pivot</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>What is Data</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>What is Data Modeling</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Why we need data modeling</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Creating relationships in excel</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Manage data in data model</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Using DAX measures</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Creating relations with multiple data</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Learn about Power Pivot Table </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>How Simple pivot table is different</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      );
};
export default ReactCourseContent;