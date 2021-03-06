import React ,{useEffect} from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="explore">
      <Header />
      <div className="container py-5 ">
        <h1 className="description-heading">Explore Topics and Skills</h1>
        <hr className="hr" />
        <table >
          <tbody>
            <tr >
              <td rowSpan="2">
                <p className="img1">Account & Finance</p>
                <img className="poster1" src={img1} alt="1" />
              </td>

              <td className="popular_course">
                <p className="img2">Designing</p>
                <Link to="/graphic">
                  <img className="poster2" src={img2} alt="2"/>
                </Link>
              </td>

              <td className="popular_course">
                <p className="img2">Marketing</p>
                <Link to="/smm">
                <img  className="my-2 poster3" src={img3} alt="3" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <p className="img2">Development</p>
                <Link to="/game">
                <img className="poster4" src={img6} alt="4" />
                </Link>
              </td>
              <td rowSpan="2">
                <p className="img3">Personal Development</p>
                <img className="poster5" src={img4}  alt="5"/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p className="img2">Data Science</p>
                <img className="mx-2 poster6" src={img5} alt="6"/>
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
