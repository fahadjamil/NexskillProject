import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import GroupLogo from "../../Assets/group logos.png";
import Footer from "../Footer";
import CopyRight from "../CopyRight";

import "./HomePage.css";

import Scrollar from "./Scrollar";

import Video from "./Video";
import PopularCourse from "./PopularCourse";
import Feedback from "./Feedback";
import Companies from "./Companies";
import Background from "./Background";
import { useState } from "react";
import Popup from "../Popup/Popup";
import SecondPopup from "../Popup/SecondPopup";
import img1 from "../../Assets/news1.jpg";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [is_Open, set_IsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggle_Popup = () => {
    set_IsOpen(!is_Open);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5ab8d/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
    Tawk_API.onLoad = function () {
      console.log("chat loaded");
      Tawk_API.setAttributes(
        {
          name: "Test Name",
          email: "email@email.com",
          hash: "hash value",
        },
        function (error) {}
      );
    };
  }, []);
  return (
    <div className="main">
      {isOpen && (
        <Popup
          content={
            <>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdDivc0sMjn0YHglcXAsWpITO2peCQ0vJabmHmjuvZn4Mscag/viewform?embedded=true" width="100%" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                
            </>
          }
          handleClose={togglePopup}
        />
      )}
      {is_Open && (
        <SecondPopup
          content={
            <>
             <div className="event-heading p-2">Events And News</div>
          <div className="row pt-2 px-3">
            <div className="col-md-6 pt-2">
              <img className="news" src={img1} />
            </div>
            <div className="col-md-6 pt-2">
              <div className="news-heading">Nexskill visited Kamalia</div>
              <div className="news-location"></div>
              <div className="news-detail pt-3">
                Nexskill aims to encourage youth empowerment by offering its
                services and learning to children. The students of Kamalia
                visited Nexskill where our COO gave a speech to guide and
                encourage students and focused on the importance of youth
                empowerment.
              </div>
              <hr className="news-line" />
            </div></div>

            </>
          }
          handle_Close={toggle_Popup}
        />
      )}
      <Background />
      <Video />
      <PopularCourse />
      <Feedback />

      <div className="main-section-4 d-flex flex-column justify-content-center align-items-center">
        <div className="main-section-4-header">Ready To Talk?</div>
        <div className="main-section-4-detail mt-2">
          Our Team is here to answer your question about us.
        </div>
        <a href="https://forms.gle/v61fz6DzmaZMXCNu9" target="_blank">
          {" "}
          <div className="main-section-4-btn mt-4">Contact Us</div>
        </a>
      </div>
      <Companies />

      <Footer />
      <CopyRight />
    </div>
  );
};

export default HomePage;
