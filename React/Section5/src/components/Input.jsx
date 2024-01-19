import React, { useState } from "react";

const Input = ({ title }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>{title}</label>
      <input
        type="number"
        required
        id={title}
        name="INITIAL INVESTMENT"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
