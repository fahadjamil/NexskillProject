import React from "react";
import DesigningPoster from "../DesigningPoster";
import TextileCourseDescription from "./TextileCourseDescription";
import TextileCareerPath from "./TextileCareerPath";
import TextileCourseContent from "./TextileCourseContent";
import TextileEligibility from "./TextileEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./TextileCourse.css";

const TextileCourse = () => {
  return (
    <>
      <DesigningPoster />
      <div className="secondheader">
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
      <div className="TextileDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <TextileCourseDescription />
          </section>
          <section id="Career">
            <TextileCareerPath />
          </section>
          <section id="CourseContent">
            <TextileCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <TextileEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default TextileCourse;
