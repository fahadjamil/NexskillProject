import React,{useEffect} from "react";
import AmazonPoster from "../AmazonPoster";
import AmazonCourseDescription from "./AmazonCourseDescription";
import AmazonCareerPath from "./AmazonCareerPath";
import AmazonCourseContent from "./AmazonCourseContent";
import AmazonEligibility from "./AmazonEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./AmazonCourse.css";

const AmazonCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <AmazonPoster />
      <div className="amazon header">
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
            <AmazonCourseDescription />
          </section>
          <section id="Career">
            <AmazonCareerPath />
          </section>
          <section id="CourseContent">
            <AmazonCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <AmazonEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default AmazonCourse;
