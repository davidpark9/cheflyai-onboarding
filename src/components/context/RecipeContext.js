import React, { useReducer, createContext } from 'react';

//creats a context object called RecipeContext constant.
const RecipeContext = createContext();

//A reducer function RecipeReducer is defined. This function specifies how the state should be updated based on different actions.
const RecipeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    default:
      return state;
  }
};
//The RecipeProvider component wraps its children with the RecipeContext.Provider. It provides the state and addRecipe values to its children as context, making them available to any child component that consumes the context using useContext.
const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecipeReducer, { recipes: [] });

  const addRecipe = (recipe) => {
    dispatch({ type: 'ADD_RECIPE', payload:recipe });
  };

  return (
    <RecipeContext.Provider value={{ state, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export {RecipeProvider, RecipeContext };
