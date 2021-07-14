import React from "react";
import DevelopmentPoster from "../DevelopmentPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AndroidCourseDescription from "./AndroidCourseDescription";
import AndroidCareer from "./AndroidCareer";
import AndroidCourseContent from "./AndroidCourseContent";
import AndroidEligibility from "./AndroidEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./AndroidDesign.css";

const AndroidDesign = () => {
  return (
    <div>
      <DevelopmentPoster />
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
            <AndroidCourseDescription />
          </section>
          <section id="Career">
            <AndroidCareer />
          </section>
          <section id="CourseContent">
            <AndroidCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <AndroidEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default AndroidDesign;
