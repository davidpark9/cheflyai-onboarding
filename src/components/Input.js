import React, { useState } from "react";
import './input.css';

const Input = ({ handleChange, value, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button  type="submit" className="input-button">
        Search
      </button>
    </form>
  );
};

export default Input;
