import React from "react";
import './Excel2CourseContent.css';

const ReactCourseContent=()=>{
    return (
        <div className="container my-3">
          <h1 className="pt-5 description-heading">Course Content</h1>
          <div className="container mx-5 my-3 px-5">
            <div className="row">
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Introduction to Power Pivot</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>What is Data</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>What is Data Modeling</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Why we need data modeling in Excel</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Creating relationships in excel</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Manage data in data model</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Using DAX measures and formula in Power Pivot Data model</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Creating relations with multiple data in excel</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Learn about Power Pivot Table (Data model pivot table)</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Learn how Simple pivot table is different with data model pivot table</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      );
};
export default ReactCourseContent;