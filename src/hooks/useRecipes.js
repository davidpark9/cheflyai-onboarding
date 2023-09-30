import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @param {string} query The recipes we want for this exact meal
 * @param {string} number - The amount of recipes to return
 * @param {string} maxCalories -Setting the threshold for the calories and indexing meals.
 */
export function useRecipes(query, number, maxCalories) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async () => {
    console.log(query);
    console.log("tried to fetch");

    setIsLoading(true);

    try {
      console.log("in try catch");
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            query,
            number,
            maxCalories,
            apiKey: "71653ba013264e15b95ac5cb78fe770d",
            addRecipeNutrition: true,
            addRecipeInformation: true,
          },
        }
      );
      
      setRecipes(response.data.results)

    } catch (error) {
      console.error("Error calling Spoonacular API:", error);
    }
  };

  return { recipes, isLoading, fetchRecipes };
}
