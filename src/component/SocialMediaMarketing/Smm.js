import React,{useEffect} from "react";
import SmmPoster from "../SmmPoster";
import SmmCourseDescription from "./SmmCourseDescription";
import SmmCareerPath from "./SmmCareerPath";
import SmmCourseContent from "./SmmCourseContent";
import SmmEligibility from "./SmmEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Smm.css";

const Smm = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <SmmPoster />
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
      <div className="SmmDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <SmmCourseDescription />
          </section>
          <section id="Career">
            <SmmCareerPath />
          </section>
          <section id="CourseContent">
            <SmmCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <SmmEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default Smm;
