import React from "react";
import nexskill from "./Images/Nexskilllogo.png";
import "./Footer.css";
import img1 from "./Images/1.svg";
import img2 from "./Images/2.svg";
import img3 from "./Images/3.svg";
import img4 from "./Images/4.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 pt-5">
            <img class="footer-logo" src={nexskill} alt="f-logo" />
            <p className="footer-text">
              At NeXskill we believe that talent is universal and
              <br />
              everyone has a right to world class education but
              <br />
              opportunities like that are scarce and not easily
              <br />
              accessible in Pakistan.
            </p>
          </div>
          <div className="col-md-6 link-section">
            <div className="row">
              <div className="col-md-4">
                <h3>Quick Links</h3>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Events</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Popular</h3>
                <ul>
                  <li>Registration</li>
                  <li>Gallery</li>
                  <li>SEO</li>
                  <li>Certification</li>
                  <li>Courses</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Quick Links</h3>
                <div className="footer-logo">
                  
                <div className="mx-2">
                    <img src={img1} alt="img-1" />
                    </div>
                    <div className="mx-2">
                    <img src={img2} alt="img-2"/>
                    </div>
                
                </div>
                <div className="footer-logo">
                  <div className="mx-2">
                    <img src={img3} alt="img-3"/>
                    </div>
                    <div className="mx-2">
                    <img src={img4} alt="img-4"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
