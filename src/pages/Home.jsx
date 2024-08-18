import { Fragment, useContext } from "react";
import Navbar from "../components/Navbar";
import { RecipeContext } from "../contexts/Recipes";
import RecipeCard from "../components/RecipeCard";
import ModalCreate from "../components/modalCreate";

export default function Home() {
  const { recipes } = useContext(RecipeContext);

  const mostrarRecipes = () => {
    console.log(recipes);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-around mt-10">
        <h1 className="text-4xl font-bold">Bienvenido al recetario React</h1>
        <ModalCreate />
      </div>
      <div onClick={mostrarRecipes}>Escribir Recetas en consola</div>
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
