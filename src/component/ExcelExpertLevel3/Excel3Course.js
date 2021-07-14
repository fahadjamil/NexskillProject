import React from "react";
import ExcelPoster from "../ExcelPoster";
import Excel3CourseDescription from "./Excel3CourseDescription";
import Excel3CourseContent from "./Excel3CourseContent";
import Excel3Eligibility from "./Excel3Eligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Excel3Course.css";

const Excel3Course = () => {
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
            <Excel3CourseDescription />
          </section>
          <section id="CourseContent">
            <Excel3CourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <Excel3Eligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default Excel3Course;
