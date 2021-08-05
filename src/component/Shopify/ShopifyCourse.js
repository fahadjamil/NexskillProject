import React from "react";
import DevelopmentPoster from "../DevelopmentPoster";
import ShopifyCourseDescription from "./ShopifyCourseDescription";
import ShopifyCareerPath from "./ShopifyCareerPath";
import ShopifyCourseContent from "./ShopifyCourseContent";
import ShopifyEligibility from "./ShopifyEligibility";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./ShopifyCourse.css";

const ShopifyCourse = () => {
  return (
    <>
      <DevelopmentPoster />
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
      <div className="GraphicDesignTop">
        <div className="second-background">
          <section id="CourseDescription">
            <ShopifyCourseDescription />
          </section>

          <section id="CourseContent">
            <ShopifyCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <ShopifyEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default ShopifyCourse;
