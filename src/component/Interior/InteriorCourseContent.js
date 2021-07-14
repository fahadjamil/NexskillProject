import React from "react";
import "./InteriorCourseContent.css";

const InteriorCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>
                Introduction of Interior Design (History, Style & Architecture)
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Design styles</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Space Planning</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Color & Lighting</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Interior finishes</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Furniture, Textiles & Fabric selection with Rendering</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>3D Modelling effects with or without Render</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab">
              <p>Handling & Working with Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorCourseContent;
