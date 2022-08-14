import React from "react";

const Button = ({ funCall, color, label }) => {
  const myColor = `btn btn-${color}`;
  return (
    <button className={myColor} onClick={funCall}>
      {label}
    </button>
  );
};

export default Button;
