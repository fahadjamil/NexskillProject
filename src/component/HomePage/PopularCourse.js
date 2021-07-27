import React from "react";
import './PopularCourse.css';
import { Link } from "react-router-dom";

const PopularCourse=()=>{
    return(
        <>
         <div className="main-section-2 d-flex pb-5 flex-column pt-5 justify-content-center align-items-center">
        <div className="main-section-2-heading my-4">Our Popular Courses</div>
        <div className="main-section-2-card row">
        <div className="col-md-3">
          <Link to="/smm">
              
            {" "}
            <div className="main-section-2-card-body1 mx-2 my-3"></div>
           
          </Link>
          </div>
          <div className="col-md-3">
          <Link to="/graphic">
          
            {" "}
            <div className="main-section-2-card-body2 mx-2 my-3"></div>
            
          </Link>
          </div>
          <div className="col-md-3">
          <Link to="/amazon">
          
            {" "}
            <div className="main-section-2-card-body3 mx-2 my-3"></div>
           
          </Link>
          </div>
          <div className="col-md-3">
          <Link to="/game">
         
            {" "}
            <div className="main-section-2-card-body4 mx-2 my-3"></div>
            
          </Link>
          </div>
        </div>
        <Link to="/allSubjects">
          {" "}
          <div className="main-section-2-btn btn d-flex align-items-center justify-content-center mt-5">
            View All Courses
          </div>
        </Link>
      </div>
        </>
    );
};
export default PopularCourse;