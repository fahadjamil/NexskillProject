import React from "react";
import DevelopmentPoster from "../DevelopmentPoster";
import PythonCourseDescription from "./PythonCourseDescription";
import PythonCareerPath from "./PythonCareerPath";
import PythonCourseContent from "./PythonCourseContent";
import PythonEligibility from "./PythonEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./PythonCourse.css";

const PythonCourse = () => {
  return (
    <>
      <DevelopmentPoster />
      <div className="header">
        <div className="container ">
          <ul>
            <AnchorLink href="#CourseDescription" className="active">
              About
            </AnchorLink>
            <AnchorLink href="#Career" className="link">
              Career Path
            </AnchorLink>
            <AnchorLink href="#CourseContent" className="link">
              Course Content
            </AnchorLink>
            <AnchorLink href="#Eligibility" className="link">
              Eligibility
            </AnchorLink>
          </ul>
        </div>
      </div>
      <div className="GraphicDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <PythonCourseDescription />
          </section>
          <section id="Career">
            <PythonCareerPath />
          </section>
          <section id="CourseContent">
            <PythonCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <PythonEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default PythonCourse;
