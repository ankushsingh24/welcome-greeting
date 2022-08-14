import React from "react";

const Input = ({ funCall, label }) => {
  return (
    <div>
      <input
        onChange={funCall}
        type="text"
        placeholder={label}
        aria-label={label}
      />
    </div>
  );
};

export default Input;
