import React from "react";
import './ReactCourseContent.css';

const ReactCourseContent=()=>{
    return (
        <div className="container my-3">
          <h1 className="pt-5 description-heading">Course Content</h1>
          <div className="container mx-5 my-3 px-5">
            <div className="row">
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>React elements</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>	React components</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>State management</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>API rendering</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>React DOM</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Events</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Navigation</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Refactoring</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Redux</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Hooks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};
export default ReactCourseContent;