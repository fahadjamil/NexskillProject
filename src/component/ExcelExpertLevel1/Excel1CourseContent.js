import React from "react";
import './Excel1CourseContent.css';

const ReactCourseContent=()=>{
    return (
        <div className="container my-3">
          <h1 className="pt-5 description-heading">Course Content</h1>
          <div className="container mx-5 my-3 px-5">
            <div className="row">
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Introduction to Power Query</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>What is an ETL tool</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Data Connectors</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Column from Example</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Merge Queries (Alternate of Vlookup)</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Append Query</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Grouping</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Split columns from Delimiter</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Extract Column</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Unpivot Columns</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Custom Column</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Conditional Column</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Loading data to excel with various options</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Analyzing data with Pivot Table</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      );
};
export default ReactCourseContent;