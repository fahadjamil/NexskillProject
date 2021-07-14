import React from "react";
import './SpokenEnglishCourseContent.css';

const SpokenEnglishCourseContent=()=>{
    return (
        <div className="container my-3">
          <h1 className="pt-5 description-heading">Course Content</h1>
          <div className="container mx-5 my-3 px-5">
            <div className="row">
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Teacher-Student introduction</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>	Introduction to English Sounds</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Emphasize on Spoken English</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course-content-tab">
                  <p>Focus on drills </p>
                </div>
              </div>
            

            </div>
          </div>
        </div>
      );

};
export default SpokenEnglishCourseContent;