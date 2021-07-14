import React from "react";
import "./CharacterCareer.css";
import careerpic from "../Images/character.png";

const CharacterCareer = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 mt-2">
          <h1 className="pt-5 description-heading">Career Paths</h1>
          <p className="pt-2 pr-3 description-text">
            As a Character Designer, you can opt for career paths as Character
            designer, caricature artist, illustrator, game character designer,
            digital painter, character designer for animation, concept artist,
            story boarding artist, accessories and propping designer of
            characters and course instructor.
          </p>
        </div>
        <div className="col-md-6 ">
          <img className="career-pic" src={careerpic} alt="careerPic"/>
        </div>
      </div>
    </div>
  );
};
export default CharacterCareer;
