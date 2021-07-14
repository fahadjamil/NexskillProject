import React from "react";
import ExcelPoster from "../ExcelPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import IntermediateCourseDescription from "./IntermediateCourseDescription";
import IntermediateCareer from "./IntermediateCareer";
import IntermediateCourseContent from "./IntermediateCourseContent";
import IntermediateEligibility from "./IntermediateEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./IntermediateDesign.css";

const IntermediateDesign = () => {
  return (
    <div>
      <ExcelPoster />
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
            <IntermediateCourseDescription />
          </section>
          <section id="Career">
            <IntermediateCareer />
          </section>
          <section id="CourseContent">
            <IntermediateCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <IntermediateEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default IntermediateDesign;
