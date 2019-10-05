import React, { Component } from "react";
import Row from "./Row";
import "./style.css";

// pass down a prop expressing how many rows we need.
// create an empty state with a base array
// render each row with the base array.
//
class PascalsTriangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseArray: new Array(this.props.numberOfRows).fill(0)
    };
  }
  render() {
    return (
      <div className="pascals-triangle">
        {this.state.baseArray.map((x, i, arr) => (
          <Row numberOfBoxes={i + 1} key={i} />
        ))}
      </div>
    );
  }
}

export default PascalsTriangle;
