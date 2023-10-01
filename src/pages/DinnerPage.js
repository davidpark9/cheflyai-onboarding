
import { useRecipes } from "../hooks/useRecipes";
import { useUserName } from "../hooks/useUsername";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Slider from "../components/Slider";
import "./pages-css/dinner.css";
import {RecipeList} from "../components/Recipe";

export default function DinnerPage() {
    
  const userName = useUserName();
  const navigate = useNavigate(); 
  const [dinner, setDinner] = useState("");
  const [calories, setCalories] = useState(400);
  const { isLoading, recipes, fetchRecipes } = useRecipes(
    dinner,
    5,
    calories
  );

  function handleDinnerChange(e) {
    setDinner(e.target.value);
  }

  function handleUpdateCalories(e) {
    setCalories(e.target.value);
  }

  const handleMealClick = async (e) => {
    e.preventDefault();
    await fetchRecipes();
  };

  return (
    <div>
      <h2>Name: {userName}</h2>
      <h3> What's your usual go to for Dinner?</h3>
      <Input
        value={dinner}
        handleChange={handleDinnerChange}
        handleSubmit={handleMealClick}
      />
      <Slider
        text="Current Calories: "
        handleChange={handleUpdateCalories}
        value={calories}
      />
      
      <RecipeList recipes={recipes} />
      <button onClick={() => navigate('/data-visualization')} className="continueButton">Finalize</button>
    </div>
  );
}

