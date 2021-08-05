import React from "react";
import SpokenPoster from "../SpokenPoster";
import SpokenEnglishCourseDescription from "./SpokenEnglishCourseDescription";
import SpokenEnglishCareerPath from "./SpokenEnglishCareerPath";
import SpokenEnglishCourseContent from "./SpokenEnglishCourseContent";
import SpokenEnglishEligibility from "./SpokenEnglishEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./SpokenEnglish.css";

const SpokenEnglish = () => {
  return (
    <>
      <SpokenPoster />
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
      <div className="SpokenEnglishDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <SpokenEnglishCourseDescription />
          </section>
          <section id="Career">
            <SpokenEnglishCareerPath />
          </section>
          <section id="CourseContent">
            <SpokenEnglishCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <SpokenEnglishEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default SpokenEnglish;
