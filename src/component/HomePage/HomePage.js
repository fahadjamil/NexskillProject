import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import GroupLogo from "../../Assets/group logos.png";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import Header from "../Header";

import "./HomePage.css";

import Scrollar from "./Scrollar";
import StartLearning from "./StartLearning";
import Goals from "./Goals";
import Video from "./Video";
import PopularCourse from "./PopularCourse";
import Feedback from "./Feedback";
import Companies from "./Companies";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
     
        <Header />
        <StartLearning />
        <Goals />
        <Video />
        <PopularCourse/>
        <Feedback/>
     
      <div className="main-section-4 d-flex flex-column justify-content-center align-items-center">
        <div className="main-section-4-header">Ready To Talk?</div>
        <div className="main-section-4-detail mt-2">
          Our Team is here to answer your question about us.
        </div>
        <a href="https://forms.gle/v61fz6DzmaZMXCNu9" target="_blank">
          {" "}
          <div className="main-section-4-btn mt-4">Contact Us</div>
        </a>
      </div>
      <Companies/>
      
      <Footer />
      <CopyRight />
    </div>
  );
};

export default HomePage;
