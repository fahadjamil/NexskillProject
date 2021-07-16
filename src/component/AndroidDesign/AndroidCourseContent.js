import React from "react";
import "./AndroidCourseContent.css";

const AndroidCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Android Basics</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Views</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Activities and their life cycles</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Recycler View</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Networking</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Fragments and their life cycles</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>IPC (Inter Process Communication)</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Intents</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Android Architecture Components</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Background Process</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Broadcast Receivers</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Preferences</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Custom Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidCourseContent;
