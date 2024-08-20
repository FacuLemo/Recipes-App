import { Fragment, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../contexts/RecipesContext";

export default function RecipeDetail() {
  const { id } = useParams(),
    { recipes, setRecipes } = useContext(RecipeContext),
    Navigate = useNavigate();

  const recipe = recipes[id] ? recipes[id] : -1;

  useEffect(() => {
    if (recipe === -1) {
      Navigate("/error");
    }
  }, [recipe]);

  const deleteRecipe = () => {
    let newRecipes = recipes.filter((r, i) => i !== Number(id));
    console.log(newRecipes);
    console.log(id);
    setRecipes(newRecipes);
    Navigate("/");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="max-w-2xl mx-auto text-center my-8">
        <div className="flex justify-between my-2">
          <a
            onClick={() => Navigate("/")}
            className=" self-start cursor-pointer inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            <svg
              className="rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            Volver
          </a>

          <a
            onClick={deleteRecipe}
            className="text-white cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-6 py-2.5 mb-4"
          >
            Eliminar
          </a>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Detalle de receta "{recipe.title}"
        </h1>
        <p className="text-gray-600 text-lg mb-6 text-pretty">
          {recipe.description}
        </p>
      </div>
    </Fragment>
  );
}
