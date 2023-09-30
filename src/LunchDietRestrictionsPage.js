// src/LunchDietRestrictionsPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LunchDietRestrictionsPage = () => {
  const location = useLocation();
  const userName = location.state?.userName || '';
  const [lunchItem, setLunchItem] = useState('');
  const [calories, setCalories] = useState(500);
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log('Lunch item:', lunchItem);
    console.log('Calories:', calories);
    navigate('/lunch-meals-page', {
      state: { query: lunchItem, maxCalories: calories, userName },
    });
  };

  return (
    <div>
      <h2>Hello, {userName}! Enter Your Lunch Item:</h2>
      <input
        type="text"
        value={lunchItem}
        onChange={(e) => setLunchItem(e.target.value)}
        placeholder="Your Lunch Item"
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

export default LunchDietRestrictionsPage;
