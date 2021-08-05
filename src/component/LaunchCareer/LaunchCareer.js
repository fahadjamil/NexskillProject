import React from "react";
import CareerPoster from "../CareerPoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import OziImage from "../../Assets/ozi group-01.png";
import AujImage from "../../Assets/auj group logo-01.png";
import Annie from "../../Assets/annie.png";
import "./LaunchCareer.css";

const LaunchCareer = () => {
  return (
    <>
      <CareerPoster />
      <div className="graphicDesignTop">
        <div className="pt-5">
          <div className="main-group">
            <div className="container pt-5 ">
              <div className="row">
              <div className="col-sm-12 col-md-6">
                <p className="ozi-text">
                  If you have completed any course or have a Bachelor’s degree,
                  we offer internship opportunities in different fields- both
                  paid and unpaid internships, depending upon your skills and
                  knowledge. Nexskill is affiliated with two major groups OZI
                  and AUJ groups. If you have the required skillset and
                  experience, then we recommend you to work with them.
                </p>
              </div>

              <div className="col-sm-12 col-md-3 text-center">
                <img src={OziImage} alt="ozi-logo" width="150px" />
              </div>
              <div className="col-sm-12 col-md-3 text-center">
                <img src={AujImage} alt="auj-logo" width="150px" />
              </div>
            </div>
          </div>
        </div></div>
        <div className="second-background pt-5 pb-5">
          <div className="container d-flex align-items-center">
            <div className="row">
            <div className="col-sm-12 col-md-6 second-main">
              <p>
                OZI group was established in 2010. It is now one of the largest
                mobile game and application publishers, with over 500 employees.
                OZI is leading in its field in creating applications and games
                for mobile users. It has initiated and scaled 10 ventures. Some
                noteworthy sub-groups that fall under OZI are OZI Technology,
                The Game Storm Studio and Appricot Studios.
              </p>
              <p>
                AUJ group has been around for the last 20 years and has created
                jobs for around 10000 employees. It is a group of companies who
                deal with mainly IT, hardware, and E-commerce and electric
                mobility. Some of its entities handled by AUJ Group are AUJ
                Media, SG Games, Zox Cell and Nexskill. AUJ group is now the
                pioneer of E-bikes in Pakistan.
              </p>
              <p>
                Nexskill was established in 2019 where it just started with 2
                courses only. Now Nexskill provides a range of courses to choose
                from as well as internships to top performing students. Nexskill
                aims to provide students with top notch training with the best
                possible staff to enhance skills and knowledge and to help
                students build a professional and successful career. Nexskill
                promises to maintain the reputation built by OZI and AUJ group
                of companies.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <img src={Annie} width="80%" />
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};

export default LaunchCareer;
