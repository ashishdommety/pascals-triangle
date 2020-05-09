import React from "react";
import { increaseRow, decreaseRow } from "../../actions/index.tsx";
import Button from "./Button";

function Form(props) {
  return (
    <div>
      <p style={{ color: "white" }}>Click to add a row.</p>
      <Button value="+" action={increaseRow} />
      <Button value="-" action={decreaseRow} />
    </div>
  );
}

export default Form;
