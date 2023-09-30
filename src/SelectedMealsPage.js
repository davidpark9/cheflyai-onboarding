// src/SelectedMealsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectedMealsPage = ({ selectedMealIds }) => {
  const [selectedMeals, setSelectedMeals] = useState([]);

  useEffect(() => {
    const fetchSelectedMeals = async () => {
      try {
        // Fetch selected meals from your backend based on the provided meal IDs
        // You need to implement the backend logic to fetch meal details based on IDs
        const response = await axios.get('YOUR_BACKEND_ENDPOINT', {
          params: {
            mealIds: selectedMealIds.join(','), // Convert meal IDs to a comma-separated string
          },
        });

        // Set the selected meals
        setSelectedMeals(response.data.selectedMeals);
      } catch (error) {
        console.error('Error fetching selected meals:', error);
      }
    };

    fetchSelectedMeals();
  }, [selectedMealIds]);

  return (
    <div>
      <h2>Selected Meals</h2>
      <ul>
        {selectedMeals.map((meal) => (
          <li key={meal.id}>{meal.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedMealsPage;
