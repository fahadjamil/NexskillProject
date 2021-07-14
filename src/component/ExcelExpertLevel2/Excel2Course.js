import React from "react";
import ExcelPoster from "../ExcelPoster";
import Excel2CourseDescription from "./Excel2CourseDescription";
import Excel2CourseContent from "./Excel2CourseContent";
import Excel2Eligibility from "./Excel2Eligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Excel2Course.css";

const Excel2Course = () => {
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
            <Excel2CourseDescription />
          </section>
          <section id="CourseContent">
            <Excel2CourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <Excel2Eligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default Excel2Course;
