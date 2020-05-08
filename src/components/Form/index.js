import React, { useState } from "react";
import Button from "./Button";

function Form(props) {
  return (
    <div>
      <Button value="+" behavior={props.increaseRow} update={props.updateRow} />
      <Button value="-" behavior={props.decreaseRow} update={props.updateRow} />
    </div>
  );
}

export default Form;
