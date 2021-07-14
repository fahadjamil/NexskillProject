import React from "react";
import ExcelPoster from "../ExcelPoster";
import Excel1CourseDescription from "./Excel1CourseDescription";
import Excel1CourseContent from "./Excel1CourseContent";
import Excel1Eligibility from "./Excel1Eligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Excel1Course.css";

const Excel1Course = () => {
  return (
    <>
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
      <div className="GraphicDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <Excel1CourseDescription />
          </section>
          <section id="CourseContent">
            <Excel1CourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <Excel1Eligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default Excel1Course;
