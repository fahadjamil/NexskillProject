import React from "react";
import { Link } from "react-router-dom";
import "./DesigningPoster.css";

const DesigningPoster = () => {
  return (
    <div className="graphic-design-main-div">
      <div className="container pt-3">
        <div className="graphic-design-main-heading">
          <p>Designing</p>
        </div>
        <div>
          <Link to="/graphic">
            <button className="btn designing-buttons mx-2 px-4">
              Graphic Design
            </button>
          </Link>

          <Link to="/digital">
            <button className="btn designing-buttons mx-2 px-4">
              Digital Painting
            </button>
          </Link>

          <Link to="/character">
            <button className="btn designing-buttons mx-2 px-4">
              Character Design
            </button>
          </Link>

          <Link to="/interior">
            <button className="btn designing-buttons mx-2 px-4">
              Interior Design
            </button>
          </Link>

          <Link to="/2D-3DAnimation">
            <button className="btn designing-buttons mx-2 px-4">
              2D Design Animation
            </button>
          </Link>

          <Link to="/photoshop">
            <button className="btn designing-buttons mx-2 px-4">
              Photoshop
            </button>
          </Link>

          <Link to="/3d-Animation">
            <button className="btn designing-buttons mx-2 px-4">
              3D Animation
            </button>
          </Link>

          <Link to="/textile">
            <button className="btn designing-buttons mx-2 px-4">
              Textile Design
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DesigningPoster;
