import React from "react";
import "./style.css";

function Button(props) {
  let handleClick = (e) => {
    props.behavior();
    props.update();
  };

  return (
    <button onClick={handleClick} className="button">
      {props.value}
    </button>
  );
}

export default Button;
