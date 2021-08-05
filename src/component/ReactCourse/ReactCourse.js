import React from "react";
import DevelopmentPoster from "../DevelopmentPoster";
import ReactCourseDescription from "./ReactCourseDescription";
import ReactCareerPath from "./ReactCareerPath";
import ReactCourseContent from "./ReactCourseContent";
import ReactEligibility from "./ReactEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./ReactCourse.css";

const ReactCourse = () => {
  return (
    <>
      <DevelopmentPoster />
      <div className="secondheader">
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
            <ReactCourseDescription />
          </section>
          <section id="Career">
            <ReactCareerPath />
          </section>
          <section id="CourseContent">
            <ReactCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <ReactEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default ReactCourse;
