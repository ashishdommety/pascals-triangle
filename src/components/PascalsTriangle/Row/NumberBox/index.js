import React from "react";
import "./style.css";

let NumberBox = (props) => {
  return (
    <div className="number-box">
      <span className="number">{props.number}</span>
    </div>
  );
};

export default NumberBox;
