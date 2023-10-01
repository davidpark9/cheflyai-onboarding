import { useRecipes } from "../hooks/useRecipes";
import { useUserName } from "../hooks/useUsername";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Slider from "../components/Slider";
import "./pages-css/lunch.css";
import {RecipeList} from "../components/Recipe";

export default function LunchPage() {
    
  const userName = useUserName();
  const navigate = useNavigate(); 
  const [lunch, setLunch] = useState("");
  const [calories, setCalories] = useState(400);
  const { isLoading, recipes, fetchRecipes } = useRecipes(
    lunch,
    5,
    calories
  );

  function handleLunchChange(e) {
    setLunch(e.target.value);
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
      <h3> What's your usual go to for lunch?</h3>
      <Input
        value={lunch}
        handleChange={handleLunchChange}
        handleSubmit={handleMealClick}
      />
      <Slider
        text="Current Calories: "
        handleChange={handleUpdateCalories}
        value={calories}
      />
      
      <RecipeList recipes={recipes} />
      <button onClick={() => navigate('/dinner-page')} className="continueButton" > Continue to Dinner</button>
    </div>
  );
}