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

import React from "react";
import './style.css';

export function RecipeBox({ recipe }) {
  const macros = [
    recipe.nutrition.nutrients[0],
    recipe.nutrition.nutrients[1],
    recipe.nutrition.nutrients[3],
    recipe.nutrition.nutrients[8],
  ];

  const imageSrc = recipe.image;

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
      <button className="selectButton">Select</button>
    </div>
  );
}

export function RecipeList({ recipes }) {
  return recipes.map((recipe) => (
    <RecipeBox key={recipe.id} recipe={recipe} />
  ));
}
