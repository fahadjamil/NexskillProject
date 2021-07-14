import React from "react";
import DesigningPoster from "../DesigningPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnimationCourseDescription from "./AnimationCourseDescription";
import AnimationCareer from "./AnimationCareer";
import AnimationCourseContent from "./AnimationCourseContent";
import AnimationEligibility from "./AnimationEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./AnimationDesign.css";

const AnimationDesign = () => {
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
            <AnimationCourseDescription />
          </section>
          <section id="Career">
            <AnimationCareer />
          </section>
          <section id="CourseContent">
            <AnimationCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <AnimationEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default AnimationDesign;
