import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick={() => props.addNumber(props.text)}
    className="number-button">
      {props.text}
    </button>
  );
};

export default NumberButton;
