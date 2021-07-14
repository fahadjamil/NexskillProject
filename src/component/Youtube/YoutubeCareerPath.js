import React from "react";
import "./YoutubeCareerPath.css";
import careerpic from "../Images/career.png";

const YoutubeCareerPath = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Outline</h1>
          <p className="pt-2 pr-3 description-text">
            After completing the YouTube training course in Rawalpindi one can
            be able to: <br/>• Create your own successful YouTube channel <br/>• Grow your
            brand with a YouTube channel <br/>• Get more YouTube views<br/> • Get more
            YouTube subscribers<br/> • Make high-quality videos on a budget<br/> • Post
            and optimize videos with great titles, descriptions, and tags<br/> •
            Create clickable thumbnails that get more views <br/>• Make money with a
            YouTube channel
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} />
        </div>
      </div>
    </div>
  );
};
export default YoutubeCareerPath;
