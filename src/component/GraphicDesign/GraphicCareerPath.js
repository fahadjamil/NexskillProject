import React from "react";
import "./GraphicCareerPath.css";
import careerpic from '../Images/career.png';

const GraphicCareerPath = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Paths</h1>
          <p className="pt-2 pr-3 description-text">
            As a Graphic Designer, you can opt for career paths as graphic<br/>
            designer, design house owner, typographer, logo designer,<br/>
            illustrator, game designer, digital painter, animator, web<br/>designer,
            app designer, UI/UX designer, concept artist,<br/> character designer and
            course instructor
          </p>
        </div>
        <div className="col-md-6 ">
        <img className="career-pic" src={careerpic}  alt="career"/>
        </div>
      </div>
    </div>
  );
};
export default GraphicCareerPath;
