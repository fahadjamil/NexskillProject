import React from "react";
import DesigningPoster from "../DesigningPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import ContentCourseDescription from "./ContentCourseDescription";
import ContentCareer from "./ContentCareer";
import ContentCourseContent from "./ContentCourseContent";
import ContentEligibility from "./ContentEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./ContentDesign.css";

const PhotoDesign = () => {
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
            <ContentCourseDescription />
          </section>
          <section id="Career">
            <ContentCareer />
          </section>
          <section id="CourseContent">
            <ContentCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <ContentEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default PhotoDesign;
