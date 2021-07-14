import React from "react";
import "./GameCourseDescription.css";

const GameCourseDescription = () => {
  return (
    <div className="container">
      <div className="col-md-7 ">
        <h1 className="pt-5 description-heading">Course Description</h1>
        <p className="pt-3 description-text">
          Game Development is the art of creating games and describes the
          design, development and release of a game. It may involve concept
          generation, design, build, test and release. While you create a game,
          it is important to think about, the game mechanics, rewards, player
          engagement and level design.
        </p>
      </div>
    </div>
  );
};

export default GameCourseDescription;
