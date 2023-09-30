import { useRecipes } from "../hooks/useRecipes";
import { useUserName } from "../hooks/useUsername";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Slider from "../components/Slider";
import breakfast from "./pages-css/breakfast.css";
import {RecipeList} from "../components/Recipe";

export default function BreakfastPage() {
  const userName = useUserName();

  const navigate = useNavigate(); // Hook to navigate to different pages
  const [breakfastName, setBreakfastName] = useState("");
  const [calories, setCalories] = useState(400);
  const { isLoading, recipes, fetchRecipes } = useRecipes(
    breakfastName,
    5,
    calories
  );

  function handleBreakfastChange(e) {
    setBreakfastName(e.target.value);
  }

  function handleUpdateCalories(e) {
    setCalories(e.target.value);
  }

  const handleMealClick = async (e) => {
    // Navigate to LunchDietRestrictionsPage
    e.preventDefault();
    await fetchRecipes();
    // navigate("/lunch-diet-restriction", {});
  };

  console.log(recipes);

  return (
    <div>
      <h2>Hello, {userName}! Please select what you want for breakfast:</h2>
      <Input
        value={breakfastName}
        handleChange={handleBreakfastChange}
        handleSubmit={handleMealClick}
      />
      <Slider
        text="Current Calories: "
        handleChange={handleUpdateCalories}
        value={calories}
      />
      <RecipeList recipes={recipes} />
    </div>
  );
}
