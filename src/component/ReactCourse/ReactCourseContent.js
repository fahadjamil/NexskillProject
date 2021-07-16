import React from "react";
import './ReactCourseContent.css';

const ReactCourseContent=()=>{
    return (
        <div className="container my-3">
          <h1 className="pt-5 description-heading">Course Content</h1>
          <div className="container mx-5 my-3 px-5">
            <div className="row">
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>React elements</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>	React components</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>State management</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>API rendering</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>React DOM</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Events</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Navigation</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Refactoring</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Redux</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab d-flex justify-content-center">
                  <p>Hooks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};
export default ReactCourseContent;