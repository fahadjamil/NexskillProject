import React from "react";
import './Companies.css';
import GroupLogo from "../../Assets/group logos.png";

const Companies=()=>{
    return(
        <>
        <div className="main-section-5 d-flex flex-column align-items-center justify-content-center pb-5">
        <div className="main-section-5-header pt-5">
          Our Hiring Partner Companies
        </div>
        
        <div className="pt-5">
          <img src={GroupLogo} alt="img-six" className="main-section-5-logo" />
        </div>
        </div>
      
        </>
    );
};
export default Companies;