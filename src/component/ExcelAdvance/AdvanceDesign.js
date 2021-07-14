import React from "react";
import ExcelPoster from "../ExcelPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AdvanceCourseDescription from "./AdvanceCourseDescription";
import AdvanceCareer from "./AdvanceCareer";
import AdvanceCourseContent from "./AdvanceCourseContent";
import AdvanceEligibility from "./AdvanceEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./AdvanceDesign.css";

const AdvanceDesign = () => {
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
            <AdvanceCourseDescription />
          </section>
          <section id="Career">
            <AdvanceCareer />
          </section>
          <section id="CourseContent">
            <AdvanceCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <AdvanceEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default AdvanceDesign;
