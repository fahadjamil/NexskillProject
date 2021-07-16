import React from "react";
import "./GameCourseContent.css";

const GameCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Introduction to the game development</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>3D game systems and coordinates</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Design Game in Console Environment</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>
                Handling lights, particle systems
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Acquiring assets from online sources</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Introduction to game physics</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Game optimization </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Publishing games </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Building humanoids for 3D games</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>creating animations </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCourseContent;
