import React, { Component } from "react";
import "./style.css";

class NumberBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="number-box">{this.props.number}</div>;
  }
}

export default NumberBox;
