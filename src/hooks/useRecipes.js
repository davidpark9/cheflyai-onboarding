import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @param {string} query The recipes we want for this exact meal
 * @param {string} number - The amount of recipes to return
 * @param {string} maxCalories -Setting the threshold for the calories and indexing meals.
 */
export function useRecipes(query, number, maxCalories) {

  //recipes is a piece of stat that will store recipe data fetched from teh API
  //setRecipes is a function that allows you to update the 'recipes' state. 
  const [recipes, setRecipes] = useState([]);

  //isLoading is a piece of stat used to track if data is currently being loaded or not.
  //setIsLoading is a function that allows you to update the isLoading State.
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async () => {
    console.log(query);
    console.log("tried to fetch");

    setIsLoading(true);

    //response stores API response
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
      //Once the response is received successfully, setRecipes(response.data.results) is called. This updates the recipes state with the data retrieved from the API. The new recipe data will then be available to any component that uses this useRecipes hook.
      setRecipes(response.data.results)

    } catch (error) {
      console.error("Error calling Spoonacular API:", error);
    }
  };

  return { recipes, isLoading, fetchRecipes };
}
