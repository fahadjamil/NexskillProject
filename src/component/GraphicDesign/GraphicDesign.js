import React,{useEffect} from "react";
import "./GraphicDesign.css";
import DesigningPoster from "../DesigningPoster";
import GraphicCourseDescription from "./GraphicCourseDescription";
import GraphicCareerPath from "./GraphicCareerPath";
import GraphicCourseContent from "./GraphicCourseContent";
import GraphicEligibility from "./GraphicEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";

const GraphiDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
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
            <GraphicCourseDescription />
          </section>
          <section id="Career">
            <GraphicCareerPath />
          </section>
          <section id="CourseContent">
            <GraphicCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <GraphicEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default GraphiDesign;
