import React from "react";
import "./SecondPopup.css";

const SecondPopup = props => {
  return (
    <div className="SecondPopup-box">
      <div className="SecondPopupbox">
        <span className="secondclose-icon" onClick={props.handle_Close}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default SecondPopup;