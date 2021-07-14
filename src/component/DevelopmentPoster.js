import React from "react";
import { Link } from "react-router-dom";
import "./DesigningPoster.css";

const DevelopmentPoster = () => {
  return (
    <div className="graphic-design-main-div">
      <div className="container pt-3">
        <div className="graphic-design-main-heading">
          <p>Development</p>
        </div>
        <div>
          <Link to="/game">
            <button className="btn designing-buttons mx-2 px-4">
              Game Development
            </button>
          </Link>

          <Link to="/fullStack">
            <button className="btn designing-buttons mx-2 px-4">
              Full Stack Development
            </button>
          </Link>

          <Link to="/android">
            <button className="btn designing-buttons mx-2 px-4">
              Android Development
            </button>
          </Link>

          <Link to="/react">
            <button className="btn designing-buttons mx-2 px-4">
              React.js Development
            </button>
          </Link>

          <Link to="/shopify">
            <button className="btn designing-buttons mx-2 px-4">Shopify</button>
          </Link>

          <Link to="/python">
            <button className="btn designing-buttons mx-2 px-4">
              Python Django
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DevelopmentPoster;
