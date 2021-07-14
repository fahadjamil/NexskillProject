import React from "react";
import { Link } from "react-router-dom";
import "./AdvanceEligibility.css";

const AdvanceEligibility = () => {
  return (
    <div className="container eligibility">
      <div className="row">
        <div className="col-md-6">
          <h1 className="description-heading">Eligibility Criteria</h1>
          <hr className="hr" />
          <p className="pt-2 pl-3 pr-3 mt-4 description-text">
            <ul>
              <li>&nbsp;No requirements, you just need passion to learn!</li>
            </ul>
          </p>
        </div>
        <div className="col-md-6">
        <div className="enroll">
                    <h5>Start Learning Today</h5>
                    <a href="https://forms.gle/4htKBNTHpM5XD4HQ7" target="_blank">
                    <button className="btn btn-danger">Enroll Now</button>
                    </a>
                </div>
                
        </div>
      </div>
    </div>
  );
};

export default AdvanceEligibility;
