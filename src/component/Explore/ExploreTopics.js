import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import img1 from "../Images/1.png";
import img2 from "../Images/2.png";
import img3 from "../Images/3.png";
import img4 from "../Images/4.png";
import img5 from "../Images/5.png";
import img6 from "../Images/6.png";
import { Link } from "react-router-dom";
import "./ExploreTopics.css";

const ExploreTopics = () => {
  return (
    <div className="explore">
      <Header />
      <div className="container py-5 ">
        <h1 className="description-heading">Explore Topics and Skills</h1>
        <hr className="hr" />
        <table>
          <tbody>
            <tr>
              <td rowSpan="2">
                <p className="img1">Account & Finance</p>
                <img src={img1} alt="1" />
              </td>

              <td>
                <p className="img2">Designing</p>
                <Link to="/graphic">
                  <img src={img2} alt="2"/>
                </Link>
              </td>

              <td>
                <p className="img2">Marketing</p>
                <img className="my-2" src={img3} alt="3" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="img2">Development</p>
                <img src={img6} alt="4" />
              </td>
              <td rowSpan="2">
                <p className="img3">Personal Development</p>
                <img src={img4}  alt="5"/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p className="img2">Data Science</p>
                <img className="mx-2" src={img5} alt="6"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};
export default ExploreTopics;
