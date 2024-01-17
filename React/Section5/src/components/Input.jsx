import React from "react";

const Input = ({ title }) => {
  return (
    <div>
      <label for={title}>{title}</label>
      <input type="text" id={title} name="INITIAL INVESTMENT" />
    </div>
  );
};

export default Input;
