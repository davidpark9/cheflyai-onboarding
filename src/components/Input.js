import React, { useState } from "react";

const Input = ({ handleChange, value, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button  type="submit">
        Submit
      </button>
    </form>
  );
};

export default Input;
