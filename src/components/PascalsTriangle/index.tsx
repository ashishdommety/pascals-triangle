import React from "react";
import Row from "./Row";
import { useSelector } from "react-redux";
import "./style.css";

let PascalsTriangle: any = (props: any) => {
  const triangle = useSelector((state: any) => state.triangle);

  let createTriangle = () => {
    return triangle.map((x: number[], i: number) => (
      <Row numberOfBoxes={i + 1} key={i} elements={x} />
    ));
  };

  return (
    <div className="pascals-triangle">
      {triangle !== undefined ? createTriangle() : <span></span>}
    </div>
  );
};

export default PascalsTriangle;
