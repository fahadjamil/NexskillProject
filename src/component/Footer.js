import React from "react";
import nexskill from "./Images/Nexskilllogo.png";
import { Link } from 'react-router-dom'
import "./Footer.css";


const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5  py-5 ">
          <Link to="/">   <img class="footer-logo" src={nexskill} alt="f-logo" /></Link>
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
          <div className="col-md-8 link-section">
            <div className="row">
              <div className="col-md-3">
                <h3>Quick Links</h3>
                <ul>
                <Link to="/">  <li>Home</li></Link>
                  <li>About Us</li>
                  <a href="https://forms.gle/v61fz6DzmaZMXCNu9" target="_blank"> <li>Contact</li></a>
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
                  <Link to="/allSubjects">  <li>Courses</li></Link>
                </ul>
              </div>
              <div className="col-md-5 footer-contact">
                <h3>Contact Number</h3>
                <thead>
                  <tr>
                    <th >
                      <p>Wajeeha:<br/> <span>03096663330</span></p>
                      <p>Arslan:<br/> <span>0309-6663331</span></p>
                      <p>Sana:<br/> <span>0309-2226664</span></p>
                      <p>Parya:<br/> <span>0300-7753330</span></p>
                    </th>
                    <th>
                      {" "}
                      <p>Laiba:<br/> <span>0300-7753331</span></p>
                      <p>Rimsha:<br/> <span>0300-7753334</span></p>
                      <p>Sheraz:<br/> <span>0303-7775034</span></p>
                      <p>Iqra:<br/> <span>0303-7775035</span></p>
                    </th>
                  </tr>
                </thead>
               
               

             

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
