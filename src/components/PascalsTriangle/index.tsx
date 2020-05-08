import React from "react";
import Row from "./Row";
import "./style.css";

let PascalsTriangle: any = (props: any) => {
  return (
    <div className="pascals-triangle">
      {props.triangle.map((x: number[], i: number) => (
        <Row numberOfBoxes={i + 1} key={i} elements={x} />
      ))}
    </div>
  );
};

export default PascalsTriangle;
