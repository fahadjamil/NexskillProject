import React from "react";
import Header from "../Header";
import StartLearning from "./StartLearning";
import Goals from "./Goals";
import "./Background.css";

const Background = () => {
  return (
    <div className="background">
      <Header />
      <StartLearning />
      <Goals />
    </div>
  );
};
export default Background;
