import React from "react";
import DesigningPoster from "../DesigningPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import DigitalCourseDescription from "./DigitalCourseDescription";
import DigitalCareer from "./DigitalCareer";
import DigitalCourseContent from "./DigitalCourseContent";
import DigitalEligibility from "./DigitalEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./DigitalPainting.css";

const DigitalPainting = () => {
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
            <DigitalCourseDescription />
          </section>
          <section id="Career">
            <DigitalCareer />
          </section>
          <section id="CourseContent">
            <DigitalCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <DigitalEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};
export default DigitalPainting;
