import React from "react";
import Row from "./Row";
import { useSelector } from "react-redux";
import "./style.css";

let PascalsTriangle: any = () => {
  const triangle = useSelector((state: any) => {
    return state.triangle;
  });

  let createTriangle = () => {
    return triangle.map((x: number[], i: number) => (
      <Row numberOfBoxes={i + 1} key={i} elements={x} />
    ));
  };

  return (
    <div className="pascals-triangle">
      {triangle.length ? (
        createTriangle()
      ) : (
        <p style={{ color: `white`, fontSize: `20px` }}>
          No rows exist. This Pascal's triangle is empty.
        </p>
      )}
    </div>
  );
};

export default PascalsTriangle;
