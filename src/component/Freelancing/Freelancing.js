import React from "react";
import FreelancingPoster from "../FreelancingPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import FreelancingCourseDescription from "./FreelancingCourseDescription";
import FreelancingCareer from "./FreelancingCareer";
import FreelancingCourseContent from "./FreelancingCourseContent";
import FreelancingEligibility from "./FreelancingEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Freelancing.css";

const FreelancingCourse = () => {
  return (
    <div>
      <FreelancingPoster />
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
            <FreelancingCourseDescription />
          </section>
          <section id="CourseContent">
            <FreelancingCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <FreelancingEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};
export default FreelancingCourse;
