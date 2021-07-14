import React from "react";
import './ShopifyCareerPath.css';
import careerpic from "../Images/career.png";

const ShopifyCareerPath=()=>{
    return (
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 mt-2">
              <h1 className="pt-5 description-heading">Career Paths</h1>
              <p className="pt-2 pr-3 description-text">
                After completing this program, you can opt for careers paths as
                front-end developer, a designing company owner, freelancer and
                course instructor.
              </p>
            </div>
            <div className="col-md-6 ">
              <img className="career-pic" src={careerpic} />
            </div>
          </div>
        </div>
      );

};
export default ShopifyCareerPath;