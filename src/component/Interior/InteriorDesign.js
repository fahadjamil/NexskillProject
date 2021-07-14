import React from "react";
import DesigningPoster from "../DesigningPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import InteriorCourseDescription from "./InteriorCourseDescription";
import InteriorCareer from "./InteriorCareer";
import InteriorCourseContent from "./InteriorCourseContent";
import InteriorEligibility from "./InteriorEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./InteriorDesign.css";

const InteriorDesign = () => {
  return (
    <div>
      <DesigningPoster />
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
            <InteriorCourseDescription />
          </section>
          <section id="Career">
            <InteriorCareer />
          </section>
          <section id="CourseContent">
            <InteriorCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <InteriorEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default InteriorDesign;
