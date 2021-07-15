import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import BannerImage from "../../Assets/banner image.png";
import CircleBtn from "../../Assets/Circle Button.svg";
import GroupLogo from "../../Assets/group logos.png";
import image from "../../Assets/Image.png";
import image1 from "../../Assets/Image1.png";
import image2 from "../../Assets/Image2.png";
import image3 from "../../Assets/Image3.png";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import Header from "../Header";

import "./HomePage.css";

import Scrollar from "./Scrollar";

const HomePage = () => {
  return (
    <div className="main">
      <div className="main-section-1">
        <Header />

        <div className="main-body d-flex">
          <div className="body-content m-auto  col-md-4 offset-1">
            <div className="body-heading">Start Learning.</div>
            <div className=" body-content-1 mt-4">
              Best IT Institution/University /College/Company In Lahore Pakistan
            </div>
            <div className="body-content-2 mt-4">
              At NeXskill we believe that talent is universal and everyone has a
              right to world class education but opportunities like that are
              scare and not easily accessible in Pakistan.
            </div>
            <div className="body-content-btn d-flex mt-4 align-items-center justify-content-center">
              Learn More
            </div>
          </div>
          <div className="bannerimg col-md-6">
            <img src={BannerImage} alt="banner" />
          </div>
        </div>

        <div className="main-body-1">
          <div className="main-body-1-sub d-flex">
            <div className="main-body-1-lg col-md-5 offset-1">
              Achieve Your Goals with NexSkill
            </div>
            <div className="main-body-1-cards-outer col-md-4 offset-1 my-5">
              <div className="main-body-1-cards px-2 py-3 mt-4">
                <div className="main-body-1-firstline">
                  {" "}
                  <img src={image} alt="img-one" className="main-body-1-img" />
                  <span className="span">Learn the latest skills </span>
                </div>
                <div className="main-body-1-cards-detail mt-2">
                  Like Business Analytics, Graphic Design, Python, and more
                </div>
              </div>
              <div className="main-body-1-cards px-2 py-3 mt-4">
                <div className="main-body-1-firstline">
                  {" "}
                  <img src={image1} alt="img-two" className="main-body-1-img" />
                  <span className="span">Career Development </span>
                </div>
                <div className="main-body-1-cards-detail mt-2">
                  In high-demand fields like IT,AI and Cloud Engineering
                </div>
              </div>
              <div className="main-body-1-cards px-2 py-3 mt-4">
                <div className="main-body-1-firstline">
                  {" "}
                  <img
                    src={image2}
                    alt="img-three"
                    className="main-body-1-img"
                  />
                  <span className="span">Earn a Certificate or Degree </span>
                </div>
                <div className="main-body-1-cards-detail mt-2">
                  From a Leading University in Business, Computer Science and
                  More
                </div>
              </div>
              <div className="main-body-1-cards px-2 py-3 mt-4 ">
                <div className="main-body-1-firstline">
                  {" "}
                  <img
                    src={image3}
                    alt="img-four"
                    className="main-body-1-img"
                  />
                  <span className="span">Upskill your Organization </span>
                </div>
                <div className="main-body-1-cards-detail mt-2">
                  With On-Demand Training and Development Programs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-body-2 d-flex flex-column align-items-center justify-content-center">
          <div className="main-body-2-sub pb-2">Course Spotlight</div>
          <div className="main-body-2-sub1 pb-3">
            Lorem ispsum dolor sit amet, consetetur sadpipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut.
          </div>
          <div className="main-body-2-btn mt-2">
            <img src={CircleBtn} alt="img-five" />
          </div>
        </div>
      </div>
      <div className="main-section-2 d-flex pb-5 flex-column pt-5 justify-content-center align-items-center">
        <div className="main-section-2-heading my-4">Our Popular Courses</div>
        <div className="main-section-2-card d-flex">
          <div className="main-section-2-card-body "></div>
          <div className="main-section-2-card-body "></div>
          <div className="main-section-2-card-body "></div>
          <div className="main-section-2-card-body "></div>
        </div>
        <div className="main-section-2-btn btn d-flex align-items-center justify-content-center mt-5">
          View All Courses
        </div>
      </div>
      <div className="main-section-3 d-flex align-items-center flex-column pt-5">
        <div className="main-section-3-heading">Student Feedback</div>
        <Scrollar/>
 
      </div>
      <div className="main-section-4 d-flex flex-column justify-content-center align-items-center">
        <div className="main-section-4-header">Ready To Talk?</div>
        <div className="main-section-4-detail mt-2">
          Our Team is here to answer your question about us.
        </div>
        <div className="main-section-4-btn mt-4">Contact Us</div>
      </div>
      <div className="main-section-5 d-flex flex-column align-items-center justify-content-center pb-5">
        <div className="main-section-5-header pt-5">
          Our Hiring Partner Companies
        </div>
        <div className="main-section-5-logos pt-5">
          <img src={GroupLogo} alt="img-six" className="main-section-5-logo" />
        </div>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default HomePage;
