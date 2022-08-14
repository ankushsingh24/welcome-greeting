import React from "react";
import "./Button.css";

const Button = ({ funCall, color, label }) => {
  const myColor = `btn btn-${color}`;
  return (
    <button id="b" className={myColor} onClick={funCall}>
      {label}
    </button>
  );
};

export default Button;
