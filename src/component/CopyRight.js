import React from "react";
import "./CopyRight.css";
import img1 from "./Images/1.svg";
import img2 from "./Images/2.svg";
import img3 from "./Images/3.svg";
import img4 from "./Images/4.svg";

const CopyRight = () => {
  return (
    <div className="copy-right">
      <div className="container mt-2 d-flex justify-content-between">
        <div>
          <p>Copyright © 2020 Nexskill Be Productive.</p>
        </div>
        <div className="d-flex">
          
          <a href="https://www.instagram.com/nexskill/?hl=en" target="_blank">
            {" "}
            <img className="footer-links mx-2" src={img2} alt="img-2" />
          </a>
          <a href="https://www.facebook.com/Nexskill/" target="_blank">
            {" "}
            <img className="footer-links mx-2" src={img3} alt="img-3" />
          </a>
          <a
            href="https://www.linkedin.com/company/nexskilltrainings/?originalSubdomain=pk"
            target="_blank"
          >
            {" "}
            <img className="footer-links mx-2" src={img4} alt="img-4" />
          </a>
        </div>
        <div className="d-flex ">
          <p className="mx-2">Privacy Policy</p>
          <p className="mx-2">Terms of Service</p>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
