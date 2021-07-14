import React from "react";
import './TextileEligibility.css';

const TextileEligibility=()=>{
    return (
        <div className="container eligibility">
          <div className="row">
            <div className="col-md-6">
              <h1 className="description-heading">Eligibility Criteria</h1>
              <hr className="hr"/>
              <p className="pt-2 pl-3 pr-3 mt-4 description-text">
                <ul>
                  <li>
                  &nbsp;One should possess an artistic ability.
                  </li>
                  <li>
                  &nbsp;Should have a good eye for color, texture, fabrics and patterns.  
                  </li>

                  <li>
                  &nbsp;Good  attention to detail.  
                  </li>
                  <li>
                  &nbsp;An interest in fashion and textiles.  
                  </li>
                  
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
export default TextileEligibility;