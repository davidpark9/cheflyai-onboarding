// src/LunchMealsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const LunchMealsPage = () => {
  const location = useLocation();
  const lunchItem = location.state.query || '';
  const userName = location.state.userName || '';
  const maxCalories = location.state.maxCalories || '';
  const navigate = useNavigate(); // Hook to navigate to different pages

  const [recommendedMeals, setRecommendedMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleMealClick = () => {
    // Navigate to LunchDietRestrictionsPage
    navigate('/dinner-diet-restriction', { state: { userName, maxCalories } });
  };

  useEffect(() => {
    const fetchRecommendedMeals = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/food/menuItems/search', {
          params: {
            query: lunchItem,
            maxCalories,
            apiKey: '71653ba013264e15b95ac5cb78fe770d',
          },
        });

        setRecommendedMeals(response.data.menuItems);
        setLoading(false);
      } catch (error) {
        console.error('Error calling Spoonacular API:', error);
        setLoading(false);
      }
    };

    fetchRecommendedMeals();
  }, [lunchItem, maxCalories]);

  return (
    <div>
      <h2>Hello, {userName}! Recommended Meals Based on Your Lunch Item: {lunchItem}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recommendedMeals.map((meal) => (
            <li key={meal.id}>
              <button onClick={handleMealClick}>{meal.title}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LunchMealsPage;
