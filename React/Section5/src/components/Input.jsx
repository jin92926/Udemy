import React, { useState } from "react";

const Input = ({ title, onChange, inputValue }) => {
  return (
    <div>
      <label>{title}</label>
      <input
        type="number"
        required
        id={title}
        name="INITIAL INVESTMENT"
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
