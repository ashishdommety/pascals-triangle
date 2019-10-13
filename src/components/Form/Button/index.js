import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    e.preventDefault();
    this.props.behavior();
    this.props.update();
  };
  render() {
    return <button onClick={this.handleClick}>{this.props.value}</button>;
  }
}

export default Button;
