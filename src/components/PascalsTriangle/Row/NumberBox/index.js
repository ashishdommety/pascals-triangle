import React, { useState } from "react";
import "./style.css";

let NumberBox = (props) => {
  const [boxState, updateSelected] = useState(false);

  return (
    <div
      className={`number-box ${boxState ? "selected" : "not-selected"}`}
      onClick={() => updateSelected(!boxState)}
    >
      <span className="number">{props.number}</span>
    </div>
  );
};

export default NumberBox;
