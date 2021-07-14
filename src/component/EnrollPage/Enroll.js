import React from "react";
import ImgCardBg from "../Signin Page/ImgCardBg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Enroll.css";

const Enroll = () => {
  return (
    <ImgCardBg size="md">
      <div className="col-md-7 col-lg-7 left-box">
        <div className="col-md-10 offset-1">
          <p className="text-center">Fill this Form</p>
          <input type="text" placeholder="Name" className="mb-3 form-input" />
          <input
            type="email"
            placeholder="Email Address"
            className="mb-3 form-input"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="mb-3 form-input"
          />
          <div class="dropdown mb-3">
            <button
              class="drop-btn form-input dropdown-toggle d-flex justify-content-between align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Courses
            </button>
            <ul
              class="dropdown-menu form-input"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a class="dropdown-item " href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <input
            type="text"
            placeholder="Address"
            className="mb-3 form-input"
          />
          <input type="text" placeholder="City" className="mb-3 form-input" />

          <button type="button" className="btn form-btn mb-3">
            Enroll
          </button>
        </div>
      </div>

      <div className="col-md-5 col-lg-5 right-box d-flex flex-column justify-content-center">
        <Link to="/">
          <button className="close-btn">
            <GrClose style={{ color: "#3E3E3E" }} />
          </button>
        </Link>

        <div className="col-md-10 offset-1">
          <h3 className="mb-3">Admission Form</h3>
          <div className="white-space mb-3"></div>
          <p>Welcome Back to Nexskill</p>
        </div>
      </div>
    </ImgCardBg>
  );
};

export default Enroll;
