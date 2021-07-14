import React from "react";
import YoutubePoster from "../YoutubePoster";
import YoutubeCourseDescription from "./YoutubeCourseDescription";
import YoutubeCareerPath from "./YoutubeCareerPath";
import YoutubeCourseContent from "./YoutubeCourseContent";
import YoutubeEligibility from "./YoutubeEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./YoutubeCourse.css";

const YoutubeCourse = () => {
  return (
    <>
      <YoutubePoster />
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
      <div className="YoutubeDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <YoutubeCourseDescription />
          </section>
          <section id="Career">
            <YoutubeCareerPath />
          </section>
          <section id="CourseContent">
            <YoutubeCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <YoutubeEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default YoutubeCourse;
