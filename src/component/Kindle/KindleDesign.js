import React from "react";
import DesigningPoster from "../DesigningPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import KindleCourseDescription from "./KindleCourseDescription";
import KindleCareer from "./KindleCareer";
import KindleCourseContent from "./KindleCourseContent";
import KindleEligibility from "./KindleEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./KindleDesign.css";

const KindleDesign = () => {
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
            <KindleCourseDescription />
          </section>
          <section id="Career">
            <KindleCareer />
          </section>
          <section id="CourseContent">
            <KindleCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <KindleEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default KindleDesign;
