import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export function RecipeContextProvider({ children }) {
  const [recipes, setRecipes] = useState(
    localStorage.getItem("recipes")
      ? JSON.parse(localStorage.getItem("recipes"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    console.log(recipes);
  }, [recipes]);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
