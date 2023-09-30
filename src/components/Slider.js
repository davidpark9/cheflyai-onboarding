import React, { useState } from "react";

const Slider = ({value, handleChange, text}) => {
  return (
    <div>
      <input
        type="range"
        min={200}
        max={1300}
        value={value}
        onChange={handleChange}
        style={{ width: "500px" }}
      />
      <span>{text}{value}</span>
    </div>
  );
};

export default Slider;