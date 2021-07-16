import React from "react";
import "./GraphicCourseContent.css";

const GraphicCourseContent = () => {
  return (
    <div className="container my-3">
      <h1 className="pt-5 description-heading">Course Content</h1>
      <div className="container mx-5 my-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Adobe Photoshop</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Adobe Illustrator</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Image Editing / Re-touching</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Digital Patterns</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Freelance</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Color Theory according to Design Aesthetics</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Logo Design</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Layouts & composition</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Vector design & Illustrations</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="course-content-tab d-flex justify-content-center">
              <p>Portfolio building</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GraphicCourseContent;
