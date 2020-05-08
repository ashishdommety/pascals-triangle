import React, { useState, useEffect } from "react";
import Button from "./Button";

function Form(props) {
  const [rowCount, updateRowCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect was triggered`);
  });

  return (
    <div>
      <p
        style={{ color: "white" }}
        id="row-count"
        onClick={() => updateRowCount(rowCount + 1)}
      >
        You clicked me {rowCount} times.
      </p>
      <Button value="+" behavior={props.increaseRow} update={props.updateRow} />
      <Button value="-" behavior={props.decreaseRow} update={props.updateRow} />
    </div>
  );
}

export default Form;
