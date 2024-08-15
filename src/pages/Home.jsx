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
        <ModalCreate/>
      </div>
      <div className="flex mx-11 mt-3">
        {recipes.map((recipe) => {
          <RecipeCard
            key={recipe.id}
            recipe_title={recipe.title}
            recipe_description={recipe.description}
          />;
        })}
      </div>
    </Fragment>
  );
}
