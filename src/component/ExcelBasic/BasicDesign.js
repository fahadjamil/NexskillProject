import React from "react";
import ExcelPoster from "../ExcelPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import BasicCourseDescription from "./BasicCourseDescription";
import BasicCareer from "./BasicCareer";
import BasicCourseContent from "./BasicCourseContent";
import BasicEligibility from "./BasicEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./BasicDesign.css";

const BasicDesign = () => {
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
            <BasicCourseDescription />
          </section>
          <section id="Career">
            <BasicCareer />
          </section>
          <section id="CourseContent">
            <BasicCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <BasicEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default BasicDesign;
