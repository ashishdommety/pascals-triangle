import React, { Component } from "react";
import NumberBox from "./NumberBox";
import "./style.css";

class Row extends Component {
  constructor(props) {
    super(props);
    this.createBoxesArray = this.createBoxesArray.bind(this);
  }
  createBoxesArray = () => {
    let boxes = this.props.elements.map((elem, i) => (
      <NumberBox number={elem} key={i} />
    ));
    return <div className="row">{boxes}</div>;
  };

  render() {
    return this.createBoxesArray();
  }
}

export default Row;
