import React from "react";
import CertificatePoster from "../CerificatePoster";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import ConvertKit from "../../Assets/convertkit.png";
import "./EarnCertificate.css";

const EarnCertificate = () => {
  return (
    <>
      <CertificatePoster />
      <div className="graphicDesignTop">
        <div className="pt-5">
          <div className="main-group">
            <div className="container pt-3 pb-3 d-flex">
              <div className="row">
              <div className="col-sm-6 col-md-6 ozi-main">
                <p className="ozi-text">
                  Nexskill provides a platform for all students out there who
                  are interested in learning basic to advanced courses, leading
                  to career development, creativity, and extensive knowledge. At
                  Nexskill, our goal is to provide excellence in whatever we do.
                  We strive to offer the best services by our trained staff!
                </p>
              </div>

              <div className=" col-sm-12 col-md-6 dev-dev">
                <h3 className="offer-heading">What we offer:</h3>
                <div className="d-flex text-center">
                  <div className="col-sm-12 col-md-5 m-solution mb-2">
                    Marketing solutions
                  </div>{" "}
                  &nbsp;
                  <div className="col-sm-7 col-md-7  m-solution mb-2">
                    Web/Application development
                  </div>
                </div>
                <div className="d-flex text-center">
                  <div className="col-sm-7 col-md-7  m-solution">
                    Final Year/Semester Projects
                  </div>{" "}
                  &nbsp;
                  <div className="col-sm-5 col-md-5  m-solution">
                    Software development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
        <div className="second-background pt-5 pb-5">
          <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-6 second-main">
              <p>
                All of our courses are taught by experienced industry
                professionals. These courses range from 1-6 months and we offer
                weekend programs and crash courses too, all to help you in
                gaining a practical approach. Upon completing of course, you
                will receive a certificate of completion by Nexskill. We offers
                various courses that fall under some of the leading fields:
              </p>
              <div className="d-flex justify-content-between mb-3">
                <div className="col-md-6 course-offer">
                  <h3>Designing</h3>
                  <p>Graphic Designing</p>
                  <p>Digital Painting</p>
                  <p>Character Designing</p>
                  <p>UI/UX Designing</p>
                </div>
                <div className="col-md-6  course-offer">
                  <h3> Development</h3>
                  <p>Game Development</p>
                  <p>Android App </p>
                  <p>Development</p>
                  <p>React JS Python & Django</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="col-md-6  course-offer">
                  <h3>E-Commerce</h3>
                  <p>Amazon Kindle</p>
                  <p>Amazon VA</p>
                  <p>Daraz</p>
                </div>

                <div className="col-md-6  course-offer">
                  <h3>Marketing</h3>
                  <p>Digital Media Marketing</p>
                  <p>Social Media Marketing </p>
                  <p>SEO</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <img src={ConvertKit} width="80%" />
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

export default EarnCertificate;
