import React from "react";
import Row from "./Row";
import "./style.css";

let PascalsTriangle = (props) => {
  return (
    <div className="pascals-triangle">
      {props.triangle.map((x, i) => (
        <Row numberOfBoxes={i + 1} key={i} elements={x} />
      ))}
    </div>
  );
};

export default PascalsTriangle;
