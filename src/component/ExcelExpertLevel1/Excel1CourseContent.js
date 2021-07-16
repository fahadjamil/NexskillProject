import React from "react";
import './Excel1CourseContent.css';

const ReactCourseContent=()=>{
    return (
        <div className="container my-3">
          <h1 className="pt-5 description-heading">Course Content</h1>
          <div className="container mx-5 my-3 px-5">
            <div className="row">
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Introduction to Power Query</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>What is an ETL tool</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Data Connectors</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Column from Example</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Merge Queries (Alternate of Vlookup)</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Append Query</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Grouping</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Split columns from Delimiter</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Extract Column</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Unpivot Columns</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Custom Column</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Conditional Column</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Loading data to excel with various options</p>
                </div>
              </div>
              <div className="col-md-4">
                 <div className="course-content-tab d-flex justify-content-center">
                  <p>Analyzing data with Pivot Table</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      );
};
export default ReactCourseContent;