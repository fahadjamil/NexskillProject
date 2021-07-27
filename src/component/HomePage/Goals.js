import React from "react";
import './Goals.css';
import image from "../../Assets/Image.png";
import image1 from "../../Assets/Image1.png";
import image2 from "../../Assets/Image2.png";
import image3 from "../../Assets/Image3.png";

const Goals=()=>{
    return(
        <div>
            <div className="main-body-1-lg col-md-5 offset-1">
              Achieve Your Goals with NexSkill
            </div>
            <div className="row">
            <div className="col-md-7 goals">

            </div>
            <div className="col-md-5 ">
            <div className="main-body-1-cards px-2 py-3 m-4">
                <div className="main-body-1-firstline">
                  {" "}
                  <img src={image} alt="img-one" className="main-body-1-img" />
                  <span className="span">Learn the latest skills </span>
                </div>
                <div className="main-body-1-cards-detail mt-2">
                  Like Business Analytics, Graphic Design, Python, and more
                </div>
              </div>
              <div className="main-body-1-cards px-2 py-3 m-4">
                <div className="main-body-1-firstline">
                  {" "}
                  <img src={image1} alt="img-two" className="main-body-1-img" />
                  <span className="span">Career Development </span>
                </div>
                <div className="main-body-1-cards-detail mt-2">
                  In high-demand fields like IT,AI and Cloud Engineering
                </div>
              </div>
              <div className="main-body-1-cards px-2 py-3 m-4">
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
              <div className="main-body-1-cards px-2 py-3 m-4 ">
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
    );
};
export default Goals;