import React, { useState } from "react";

const Input = ({ title }) => {
  const [inputValue, setInputValue] = useState(0);

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
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
