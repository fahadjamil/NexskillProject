import React from "react";
import nexskill from "./Images/Nexskilllogo.png";
import { Link } from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5 footer-detail py-5 ">
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
              <div className="col-md-4 home">
                <h3>Quick Links</h3>
                <ul>
                <Link to="/">  <li>Home</li></Link>
                <Link to="/aboutUs">   <li>About Us</li></Link>
                  <a href="https://forms.gle/v61fz6DzmaZMXCNu9" target="_blank"> <li>Contact</li></a>
                  <Link to="/events">  <li>Events</li></Link>
                  <Link to="/blogs"><li>Blogs</li></Link>
                </ul>
              </div>
              <div className="col-md-3 popular">
                <h3>Popular</h3>
                <ul>
                <a href="https://forms.gle/DQjn7om8z6ScaV28A" target="_blank"> <li>Registration</li></a> 
                 
                  <Link to="/allSubjects">  <li>Courses</li></Link>
                </ul>
              </div>
              <div className="col-md-5 footer-contact">
                <h3>Contact Number</h3>
                <thead>
                  <tr>
                    <th >
                      <p> <span>03096663330</span></p>
                      <p> <span>0309-6663331</span></p>
                      <p> <span>0309-2226664</span></p>
                      <p> <span>0300-7753330</span></p>
                    </th>
                    <th>
                      {" "}
                      <p> <span>0300-7753331</span></p>
                      <p> <span>0300-7753334</span></p>
                      <p> <span>0303-7775034</span></p>
                      <p> <span>0303-7775035</span></p>
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
