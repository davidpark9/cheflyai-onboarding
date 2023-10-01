import React, { useState } from "react";

const Slider = ({value, handleChange, text}) => {
  return (
    <div>
      <input
        type="range"
        min={100}
        max={2500}
        value={value}
        onChange={handleChange}
        style={{ width: "200px" }}
      />
      <span>{text}{value}</span>
    </div>
  );
};

export default Slider;