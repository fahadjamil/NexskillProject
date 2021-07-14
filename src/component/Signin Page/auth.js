import React from "react";
import ImgCardBg from "./ImgCardBg";
import { IoLogoFacebook } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./auth.css";

const Auth = () => {
  return (
    <ImgCardBg size="md">
      <div className="col-md-7 col-lg-7 left-box">
        <div className="col-md-10 offset-1">
          <div className="fb-link d-flex mb-3">
            <IoLogoFacebook size={25} style={{ marginRight: "120px" }} />
            <div className="fb-text">
              <p>Continue with Facebook</p>
            </div>
          </div>
          <div className="fb-link d-flex mb-3">
            <FcGoogle size={25} style={{ marginRight: "120px" }} />
            <div className="fb-text">
              <p>Continue with Google</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center double-line mb-3">
            <hr style={{ width: "30%" }} />
            <p>Or Sign In With</p>
            <hr style={{ width: "30%" }} />
          </div>
          <input
            type="text"
            placeholder="Email Address"
            className="mb-3 form-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-3 form-input"
          />
          <input
            type="checkbox"
            id="loggedin"
            name="signIn"
            value="logged"
            className="check-sign mb-3"
          />
          &nbsp; &nbsp;
          <label htmlFor="loggedin" className="label-sign">
            Keep me signed in
          </label>
          <button type="button" className="btn form-btn mb-3">
            sign in
          </button>
          <div className="d-flex justify-content-center">
            <p style={{ color: "#3D3D3D", fontSize: "15px" }}>New user?</p>{" "}
            &nbsp; &nbsp;
            <p className="new-account">Create an account</p>
          </div>
        </div>
      </div>
      <div className="col-md-5 col-lg-5 right-box d-flex flex-column justify-content-center">
        <Link to="/">
          <button className="close-btn">
            <GrClose style={{ color: "#3E3E3E" }} />
          </button>
        </Link>

        <div className="col-md-10 offset-1">
          <h3 className="mb-3">Welcome Back to Nexskill</h3>
          <div className="white-space mb-3"></div>
          <p>Sign in to continue to your account.</p>
        </div>
      </div>
    </ImgCardBg>
  );
};

export default Auth;
