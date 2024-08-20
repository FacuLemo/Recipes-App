import { Fragment, useContext } from "react";
import Navbar from "../components/Navbar";
import { RecipeContext } from "../contexts/RecipesContext";
import RecipeCard from "../components/RecipeCard";
import ModalCreate from "../components/ModalCreate";

export default function Home() {
  const { recipes } = useContext(RecipeContext);

  // const mostrarRecipes = () => {
  //   console.log(recipes);
  // };

  return (
    <Fragment>
      <Navbar />
      {/* <div
        className="cursor-pointer  py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
        onClick={mostrarRecipes}
      >
        Escribir Recetas en consola
      </div> */}
      <div className="flex justify-around mt-10">
        <h1 className="text-4xl font-bold">Bienvenido al recetario React</h1>
        <ModalCreate />
      </div>
      <div className="flex flex-wrap justify-center mx-11 mt-3">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            id={index}
            recipe_title={recipe.title}
            recipe_description={recipe.description}
          />
        ))}
      </div>
    </Fragment>
  );
}
