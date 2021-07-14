import React from "react";
import DevelopmentPoster from "../DevelopmentPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import FullStackCourseDescription from "./FullStackCourseDescription";
import FullStackCareer from "./FullStackCareer";
import FullStackCourseContent from "./FullStackCourseContent";
import FullStackEligibility from "./FullStackEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./FullStackDesign.css";

const FullStackDesign = () => {
  return (
    <div>
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
      <div className="graphicDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <FullStackCourseDescription />
          </section>
          <section id="Career">
            <FullStackCareer />
          </section>
          <section id="CourseContent">
            <FullStackCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <FullStackEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default FullStackDesign;
