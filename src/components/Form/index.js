import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";

function Form(props) {
  const [rowCount, updateRowCount] = useState(0);

  const dispatch = useDispatch();
  const rows = useSelector((state) => {
    console.log(state);
    return state.rows;
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
