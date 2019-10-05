import React, { Component } from "react";
import NumberBox from "./NumberBox";
import "./style.css";
// pass down props for number in elements in each row.

class Row extends Component {
  constructor(props) {
    super(props);
    this.createBoxesArray = this.createBoxesArray.bind(this);
  }
  createBoxesArray = () => {
    let array = new Array(this.props.numberOfBoxes).fill(1);
    let boxes = array.map(x => <NumberBox />);
    return <div className="row">{boxes}</div>;
  };
  render() {
    return this.createBoxesArray();
  }
}

export default Row;
