import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectedMealsPage from './SelectedMealsPage';

const DinnerMealsPage = () => {
  const location = useLocation();
  const dinnerItem = location.state?.dinnerItem || '';
  const userName = location.state?.userName || '';
  const [selectedMealIds, setSelectedMealIds] = useState([]);
  const [recommendedMeals, setRecommendedMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleMealClick = (mealId) => {
    setSelectedMealIds([...selectedMealIds, mealId]);
  };

  const handleViewSelectedMeals = () => {
    // Navigate to the SelectedMealsPage with the selected meal IDs
    navigate('/selected-meals', { state: { selectedMealIds } });
  };

  useEffect(() => {
    const fetchRecommendedMeals = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/food/menuItems/search', {
          params: {
            query: dinnerItem,
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
  }, [dinnerItem]);

  return (
    <div>
      <h2>Hello, {userName}! Recommended Meals Based on Your Dinner: {dinnerItem}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {recommendedMeals.map((meal) => (
            <button key={meal.id} onClick={() => handleMealClick(meal.id)}>
              {meal.title}
            </button>
          ))}
        </div>
      )}

      <button onClick={handleViewSelectedMeals}>View Selected Meals</button>
    </div>
  );
};

export default DinnerMealsPage;
