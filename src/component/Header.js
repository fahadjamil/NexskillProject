import React from "react";
import NexskillLogo from "../Assets/Nexskill logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <div className=" d-flex pt-4 align-items-center header">
      <div className="col-md-3 offset-1 d-flex align-items-center justify-content-around">
        <img src={NexskillLogo} className="logo" alt="nexskill" />
        <div className="dropdown d-flex justify-content-center">
          <div className="dropbtn header_drop_btn d-flex px-3 py-2">
            Explore
            <div className="dropicon">
              <RiArrowDropDownLine size={20} />{" "}
            </div>
          </div>
          <div className="dropdown-content header_drop">
            <div className="dropdown-content-headings">Goals</div>
            <a>Take a Free Course </a>
            <a>
              <div className="d-flex justify-content-between">
                Earn a Degree{" "}
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </a>
            <a>
              <div className="d-flex justify-content-between">
                Earn a Certificate{" "}
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </a>
            <a>
              <div className="d-flex justify-content-between">
                Launch or advance your career{" "}
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </a>
            <div className="dropdown-content-headings">Subjects</div>
            <Link to="/game">
              <div className="d-flex justify-content-between">
                Devlopment
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <Link to="/graphic">
              <div className="d-flex justify-content-between">
                Designing
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <Link to="/amazon">
              <div className="d-flex justify-content-between">
                Amazon
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <Link to="/freelancing">
              <div className="d-flex justify-content-between">
                Freelancing
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <Link to="/smm">
              <div className="d-flex justify-content-between">
                Social Media Marketing
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <Link to="/dmm">
              <div className="d-flex justify-content-between">
                Dmm
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <Link to="/youtube">
              <div className="d-flex justify-content-between">
                Youtube
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <Link to="/spokenEnglish">
              <div className="d-flex justify-content-between">
                Spoken English
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <Link to="/excelBasic">
              <div className="d-flex justify-content-between">
                Microsoft Excel
                <span>
                  <BiChevronRight size={15} />
                </span>
              </div>
            </Link>
            <div className="dropdown-content-headings">Faculty</div>
            <Link to="/allSubjects">
              <div className="dropdown-content-btn">Browser All Subjects</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="search col-md-4 d-flex justify-content-center">
        <input
          type="text"
          className="searchBar"
          placeholder="What Do You Want To Learn"
        />
        <button className="searchBtn">
          {" "}
          <BiSearch size={20} />
        </button>
      </div>
      <div className="headerBtn col-md-3 d-flex justify-content-end">
        <a href="https://forms.gle/DQjn7om8z6ScaV28A" target="_blank">
        <button className="signinbtn">
          Enroll Now
        </button>
        </a>
      </div>
    </div>
  );
};
export default Header;
