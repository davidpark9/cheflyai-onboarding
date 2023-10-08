
import { RecipeContext } from "../context/RecipeContext";
import React, { useState,useContext } from "react";
import './style.css';

export function RecipeBox({ recipe ,setrecipeList}) {
  const [selected,setSelected]=useState(false)
  const macros = [
    recipe.nutrition.nutrients[0],
    recipe.nutrition.nutrients[1],
    recipe.nutrition.nutrients[3],
    recipe.nutrition.nutrients[8],
  ];
  //console.log(macros,'macros==');

const imageSrc = recipe.image;
const {state,addRecipe}=useContext(RecipeContext)
  //when button is clicked this function is called.
const addInfoHandler=()=>{
  addRecipe(macros);
  setSelected((prev)=>!prev)
}
console.log('state==',state.recipes);
  return (
    <div className="recipe-box">
      <div className="recipe-title">
        <h3>{recipe.title}</h3>
      </div>
      <div className="recipe-content">
        <img src={imageSrc} alt={recipe.title} />
        <code>
          {macros.map((macro) => macro.name + ": " + macro.amount).join("\n")}
        </code>
      </div>
      <button onClick={addInfoHandler} className={`selectButton ${selected?"green":""}`}>Select</button>
    </div>
  );
}



export function RecipeList({ recipes }) {
  const [recipeList,setrecipeList]=useState([])

  return recipes.map((recipe) => (
    <RecipeBox key={recipe.id} recipe={recipe} />
  ));
}
