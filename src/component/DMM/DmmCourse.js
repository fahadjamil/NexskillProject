import React from "react";
import DmmPoster from "../DmmPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import DmmCourseDescription from "./DmmCourseDescription";
import DmmCareerPath from "./DmmCareerPath";
import DmmCourseContent from "./DmmCourseContect";
import DmmEligibility from "./DmmEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./DmmCourse.css";

const DmmCourse = () => {
  return (
    <div>
      <DmmPoster />

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
      <div className="graphicDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <DmmCourseDescription />
          </section>
          <section id="Career">
            <DmmCareerPath />
          </section>
          <section id="CourseContent">
            <DmmCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <DmmEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};
export default DmmCourse;
