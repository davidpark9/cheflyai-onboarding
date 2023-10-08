import { useRecipes } from "../hooks/useRecipes";
import { useUserName } from "../hooks/useUsername";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Slider from "../components/Slider";
import  "./pages-css/breakfast.css";
import {RecipeList} from "../components/Recipe";



export default function BreakfastPage() {
  const userName = useUserName();
  const navigate = useNavigate(); 
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
    e.preventDefault();
    await fetchRecipes();
    

  };


  return (
    <div>
      <h2>Name: {userName}</h2>
      <h3> What's your usual go-to for breakfast?</h3>
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
      <button onClick={() => navigate('/lunch-page')} className="continueButton" > Proceed to Lunch</button>
    </div>
  );
}
