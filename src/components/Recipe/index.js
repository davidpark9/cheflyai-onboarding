import React from "react";

export function RecipeBox({ recipe }) {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <button>View More</button>
    </div>
  );
}

export function RecipeList({recipes}){
    return recipes.map(recipe => <RecipeBox recipe={recipe} />)
}
