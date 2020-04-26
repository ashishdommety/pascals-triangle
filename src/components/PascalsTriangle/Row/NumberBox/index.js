import React, { Component } from "react";
import "./style.css";

let NumberBox = (props) => {
  return <div className="number-box">{props.number}</div>;
};

export default NumberBox;
