import React from "react";
import NumberBox from "./NumberBox";
import "./style.css";

let Row = (props) => {
  let createBoxesArray = () => {
    let boxes = props.elements.map((elem, i) => (
      <NumberBox number={elem} key={i} />
    ));
    return <div className="row">{boxes}</div>;
  };

  return createBoxesArray();
};

export default Row;
