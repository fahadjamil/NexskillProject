import React from "react";
import "./GameCourseContent.css";

const GameCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Introduction to the game development</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Introduction to 3D game systems and coordinates</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>How to Design Game in Console Environment</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>
                Handling lights, particle systems, fire, smoke, water and more
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Acquiring assets from online sources</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Introduction to game physics</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Game optimization </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Publishing games </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Building humanoids for 3D games</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>creating animations </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCourseContent;
