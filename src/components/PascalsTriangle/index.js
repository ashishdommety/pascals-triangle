import React, { Component } from "react";
import Row from "./Row";
import "./style.css";

class PascalsTriangle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pascals-triangle">
        {this.props.triangle.map((x, i) => (
          <Row numberOfBoxes={i + 1} key={i} elements={x} />
        ))}
      </div>
    );
  }
}

export default PascalsTriangle;
