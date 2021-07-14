import React from "react";
import './ShopifyEligibility.css'

const ShopifyEligibility=()=>{
    return (
        <div className="container eligibility">
          <div className="row">
            <div className="col-md-6">
              <h1 className="description-heading">Eligibility Criteria</h1>
              <hr className="hr"/>
              <p className="pt-2 pl-3 pr-3 mt-4 description-text">
                <ul>
                  <li>
                  &nbsp;The complete Shopify drop-shipping course is a best choice for beginners willing to make career in E-commerce or anyone interested to setup his/her own drop shipping business.
                  </li>
                  <li>&nbsp;Take this course if you’re ready to work hard to build your Shopify website.</li>
                  <li>&nbsp;Take this course if you’ve decided Shopify is the right E-commerce website platform for you.</li>
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
export default ShopifyEligibility;