import React from "react";
import "./CharacterDesign.css";
import DesigningPoster from "../DesigningPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import CharacterCourseDescription from "./CharacterCourseDescription";
import CharacterCareer from "./CharacterCareer";
import CharacterCourseContent from "./CharacterCourseContent";
import CharacterEligibility from "./CharacterEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";

const CharacterDesign = () => {
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
            <CharacterCourseDescription />
          </section>
          <section id="Career">
            <CharacterCareer />
          </section>
          <section id="CourseContent">
            <CharacterCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <CharacterEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};
export default CharacterDesign;
