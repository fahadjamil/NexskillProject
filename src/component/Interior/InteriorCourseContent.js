import React from "react";
import "./InteriorCourseContent.css";

const InteriorCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Contents</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>
                Introduction of Interior Design 
              </p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Design styles</p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Space Planning</p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Color & Lighting</p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Interior finishes</p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Furniture, Textiles & Fabric </p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>3D Modelling effects</p>
            </div>
          </div>
          <div className="col-md-4">
             <div className="course-content-tab d-flex justify-content-center">
              <p>Handling & Working with Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorCourseContent;
