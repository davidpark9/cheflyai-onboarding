import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DietRestrictionPage = () => {
  const [breakfastMeal, setBreakfastMeal] = useState('');
  const [userName, setUserName] = useState('');
  const [maxCalories, setMaxCalories] = useState(1000); // Initial max calories value
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log('Breakfast meal:', breakfastMeal); // Check the breakfast meal
    navigate('/meals', { state: { query: breakfastMeal, userName, maxCalories } });
  };

  return (
    <div>
      <h2>Enter Your Breakfast Meal:</h2>
      <input
        type="text"
        value={breakfastMeal}
        onChange={(e) => setBreakfastMeal(e.target.value)}
        placeholder="Your Breakfast Meal"
      />

      <h2>Enter Your Name:</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Your Name"
      />

      <h2>Set Max Calories:</h2>
      <input
        type="range"
        min="0"
        max="3000"
        value={maxCalories}
        onChange={(e) => setMaxCalories(e.target.value)}
      />
      <p>Max Calories: {maxCalories}</p>

      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default DietRestrictionPage;
