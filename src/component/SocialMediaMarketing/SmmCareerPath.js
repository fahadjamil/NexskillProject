import React from "react";
import "./SmmCareerPath.css";
import careerpic from "../Images/career.png";

const SmmCareerPath = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Outline</h1>
          <p className="pt-2 pr-3 description-text"><b>
            Facebook Marketing in association with Facebook</b><br/> Facebook Pages and
            Post Best Practices Facebook Ads - Optimization and Reporting
            Facebook Messenger, Building Brand Awareness Driving Online
            Sales/Leads<br/><b>
            Content Marketing in association with LinkedIn</b>
            <br/>
            Identifying & creating “Good” Content Framework to begin a content
            marketing program How to show ROI for content programs About key
            resources and tools to create and curate content
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} />
        </div>
      </div>
    </div>
  );
};
export default SmmCareerPath;
