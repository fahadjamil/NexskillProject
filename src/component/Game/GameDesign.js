import React,{useEffect} from "react";
import DevelopmentPoster from "../DevelopmentPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import GameCourseDescription from "./GameCourseDescription";
import GameCareer from "./GameCareer";
import GameCourseContent from "./GameCourseContent";
import GameEligibility from "./GameEligibility";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./GameDesign.css";

const GameDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <DevelopmentPoster />
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
            <GameCourseDescription />
          </section>
          <section id="Career">
            <GameCareer />
          </section>
          <section id="CourseContent">
            <GameCourseContent />
          </section>
        </div>
        <section id="Eligibility">
          <GameEligibility />
        </section>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default GameDesign;
