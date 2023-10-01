// import React from "react";
// import './style.css'

// export function RecipeBox({ recipe }) {
//   const macros = [
//      recipe.nutrition.nutrients[0],
//      recipe.nutrition.nutrients[2],
//   ];

//   const images = [
//     recipe.image[0],
//     recipe.image[1],
//   ];

//   return (
//     <div
//     style={{
//       maxWidth: 450
//     }}

//     >
//       <h3>{recipe.title}</h3>
//       <button>View More</button>
//       <div
//         style={{
//           display: "flex",
//           padding: 12,
//           borderRadius: 6,
//           backgroundColor: "darkslategrey",
//           color: "whitesmoke",
//         }}
//       >
//         <code 
//           style={{
//             wordWrap: "break-word"
//           }}
//         > {JSON.stringify(macros)}</code>
//       </div>
//     </div>
//   );
// }

// export function RecipeList({ recipes }) {
//   return recipes.map((recipe) => <RecipeBox recipe={recipe} />);
// }

import { json } from "d3";
import React, { useState } from "react";
import './style.css';

export function RecipeBox({ recipe ,setrecipeList}) {
  const macros = [
    recipe.nutrition.nutrients[0],
    recipe.nutrition.nutrients[1],
    recipe.nutrition.nutrients[3],
    recipe.nutrition.nutrients[8],
  ];
  //console.log(macros,'macros==');

  const imageSrc = recipe.image;

  //when button is clicked this function is called.
const addInfoHandler=()=>{
  setrecipeList((prev)=>[...prev, macros])
}
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
      <button onClick={addInfoHandler} className="selectButton">Select</button>
    </div>
  );
}



export function RecipeList({ recipes }) {
  const [recipeList,setrecipeList]=useState([])
  if(recipeList){

    localStorage.setItem('recipe',JSON.stringify(recipeList))
    //const storedRecipe= localStorage.getItem("recipe")
    //const persedRes= JSON.parse(storedRecipe)
    //console.log("rec==",persedRes);
  }

  return recipes.map((recipe) => (
    <RecipeBox key={recipe.id} setrecipeList={setrecipeList} recipe={recipe} />
  ));
}
