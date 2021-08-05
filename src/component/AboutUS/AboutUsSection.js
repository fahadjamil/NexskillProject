import React from "react";
import "./AboutUsSection.css";
import img1 from "../../Assets/Image.png";
import img2 from "../../Assets/Image1.png";
import img3 from "../../Assets/Image2.png";
import img4 from "../../Assets/Image3.png";
import poster from "../../Assets/poster.jpg"


const AboutUsSection = () => {
  return (
    <div className="about-us mt-3">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="about-heading">About Us</div>
            <div className="about-text">
              Nexskill was established in 2019 where it just started with 2
              courses only. Now Nexskill provides a range of courses to choose
              from as well as internships to top performing students. Nexskill
              aims to provide students with top notch training with the best
              possible staff to enhance skills and knowledge and to help
              students build a professional and successful career. Nexskill
              promises to maintain the reputation built by OZI and AUJ group of
              companies.
            </div>
          </div>
          <div className="col-md-6  p-5">
              <div className="row m-3">
                  <div className="col-md-6">
                  <img className="img1" src={img1} alt="AboutPic"/>
                  <div className="about-text mt-5 pt-3">Learn the latest skills</div>
                  </div>
                  <div className="col-md-6">
                  <img className="img1" src={img2} alt="AboutPic"/>
                  <div className="about-text mt-5 pt-3">Upskill your organization</div>
                  </div>
                  <div className="col-md-6 mt-5">
                  <img className="img1" src={img3} alt="AboutPic"/>
                  <div className="about-text mt-5  pt-3">Career Development</div>
                  </div>
                  <div className="col-md-6 mt-5">
                  <img className="img1" src={img4} alt="AboutPic"/>
                  <div className="about-text mt-5 pt-3">Earn a certificate or degree</div>
                  </div>

              </div>
          </div>
        </div>
        
      </div>
      <div className="about-us-poster">
      <img className="poster " src={poster} alt="AboutPic"/>
        </div>
    </div>
  );
};
export default AboutUsSection;
