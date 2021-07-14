import React from "react";
import DesigningPoster from "../DesigningPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import PhotoshopCourseDescription from "./PhotoshopCourseDescription";
import PhotoshopCareer from "./PhotoshopCareer";
import PhotoshopCourseContent from "./PhotoshopCourseContent";
import PhotoshopEligibility from "./PhotoshopEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./PhotoDesign.css";

const PhotoDesign = () => {
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
            <PhotoshopCourseDescription />
          </section>
          <section id="Career">
            <PhotoshopCareer />
          </section>
          <section id="CourseContent">
            <PhotoshopCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <PhotoshopEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default PhotoDesign;
