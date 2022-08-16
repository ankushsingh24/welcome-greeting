import React from "react";
import "./Input.css";

const Input = ({ funCall, label, val }) => {
  return (
    <div>
      <input onChange={funCall} type="text" placeholder={label} value={val} />
    </div>
  );
};

export default Input;
