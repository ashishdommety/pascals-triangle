import React from "react";
import Button from "./Button";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button
          value="+"
          behavior={this.props.increaseRow}
          update={this.props.updateRow}
        />
        <Button
          value="-"
          behavior={this.props.decreaseRow}
          update={this.props.updateRow}
        />
      </div>
    );
  }
}

export default Form;
