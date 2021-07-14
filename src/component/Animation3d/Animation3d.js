import React from "react";
import DesigningPoster from "../DesigningPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import Animation3dCourseDescription from "./Animation3dCourseDescription";
import Animation3dCareer from "./Animation3dCareer";
import Animation3dCourseContent from "./Animation3dCourseContent";
import Animation3dEligibility from "./Animation3dEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Animation3d.css";

const Animation3d = () => {
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
            <Animation3dCourseDescription />
          </section>

          <section id="CourseContent">
            <Animation3dCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <Animation3dEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};
export default Animation3d;
