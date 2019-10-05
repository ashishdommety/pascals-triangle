import React, { Component } from "react";
import NumberBox from "./NumberBox";
import "./style.css";
// pass down props for number in elements in each row.

class Row extends Component {
  constructor(props) {
    super(props);
    this.createBoxesArray = this.createBoxesArray.bind(this);
    this.calculateBoxNumber = this.calculateBoxNumber.bind(this);
  }
  createBoxesArray = () => {
    let array = this.calculateBoxNumber(
      new Array(this.props.numberOfBoxes).fill(0)
    );
    let boxes = array.map(elem => <NumberBox number={elem} />);
    return <div className="row">{boxes}</div>;
  };

  calculateBoxNumber = arr => {
    arr[0] = 1;
    arr[arr.length - 1] = 1;
    let rowNumber = this.props.numberOfBoxes; // the rowNumber
    // loop that checks length of array and calculates the values in between.
    if (rowNumber > 2) {
      for (let i = 1; i < arr.length - 1; i++) {
        // get access to array of (row - 1) from store.
        // calculate sum of i, i - 1.
        // set that to the array.
        arr[i] = 2;
      }
    }
    return arr;
  };

  render() {
    return this.createBoxesArray();
  }
}

export default Row;
