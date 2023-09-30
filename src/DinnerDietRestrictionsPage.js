// src/DinnerDietRestrictionsPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DinnerDietRestrictionsPage = () => {
  const location = useLocation();
  const userName = location.state?.userName || '';
  const [dinnerItem, setDinnerItem] = useState('');
  const [calories, setCalories] = useState(500);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/dinner-meals-page', {
      state: { dinnerItem, calories, userName },
    });
  };

  return (
    <div>
      <h2>Hello, {userName}! Enter Your Dinner Item:</h2>
      <input
        type="text"
        value={dinnerItem}
        onChange={(e) => setDinnerItem(e.target.value)}
        placeholder="Your Dinner Item"
      />

      {/* Calorie Slider */}
      <div>
        <label htmlFor="calorieSlider">Select Max Calories:</label>
        <input
          type="range"
          id="calorieSlider"
          value={calories}
          min={0}
          max={2000}
          step={100}
          onChange={(e) => setCalories(parseInt(e.target.value))}
        />
        <span>{calories} Calories</span>
      </div>

      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default DinnerDietRestrictionsPage;
