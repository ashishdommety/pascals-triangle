import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

function Button(props) {
  const dispatch = useDispatch();

  const rows = useSelector((state) => {
    console.log(state);
    return state.rows;
  });

  return (
    <button onClick={() => dispatch({ type: props.action })} className="button">
      {props.value}
    </button>
  );
}

export default Button;
