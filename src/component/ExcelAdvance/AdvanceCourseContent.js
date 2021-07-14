import React from "react";
import "./AdvanceCourseContent.css";

const AdvanceCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Look up Formulas</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Excel What if Analysis</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Other Data Analysis Advance Features</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Excel Consolidation</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Excel Macro</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Pivot Table</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Excel VBA forms Options</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Advance Find & Replace for Data Cleaning</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Other Advance Formulas and Functions</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Basic Dashboard </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceCourseContent;
