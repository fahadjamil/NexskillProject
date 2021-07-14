import React from "react";
import {Link} from "react-router-dom";
import "./DesigningPoster.css";

const ExcelPoster = () => {
  return (
    <div className="graphic-design-main-div">
      <div className="container pt-3">
        <div className="graphic-design-main-heading">
          <p>Development</p>
        </div>
        <div>
          <Link to="/excelBasic">
            <button className="btn designing-buttons mx-2 px-4">
              Excel Basics
            </button>
          </Link>

          <Link to="/excelIntermediate">
            <button className="btn designing-buttons mx-2 px-4">
              Excel Intermediate
            </button>
          </Link>

          <Link to="/excelAdvance">
            <button className="btn designing-buttons mx-2 px-4">
              Excel Advance
            </button>
          </Link>

          <Link to="/expertLevel1">
            <button className="btn designing-buttons mx-2 px-4">
              Excel Expert Level I
            </button>
          </Link>

          <Link to="/expertLevel2">
            <button className="btn designing-buttons mx-2 px-4">
              Excel Expert Level II
            </button>
          </Link>

          <Link to="/expertLevel3">
            <button className="btn designing-buttons mx-2 px-4">
              Excel Expert Level III
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ExcelPoster;
