import { Fragment, useContext, useState } from "react";
import { RecipeContext } from "../contexts/Recipes";

export default function ModalCreate() {
  const [showModal, setShowModal] = useState(false),
    [inputTitle, setInputTitle] = useState(""),
    [inputDesc, setInputDesc] = useState(""),
    [alert, setAlert] = useState(false),
    { recipes, setRecipes } = useContext(RecipeContext);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addRecipe = () => {
    if (inputTitle == "" || inputDesc == "") {
      setAlert(true);
    } else {
      const newRecipe = {
        title: inputTitle,
        description: inputDesc,
      };
      console.log(newRecipe, recipes);
      setRecipes([...recipes, newRecipe]);
      setAlert(false);
      setInputTitle("");
      setInputDesc("");
      closeModal();
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        onClick={openModal}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Crear receta
      </button>
      <div
        className={`${
          showModal ? "fixed" : "hidden"
        }  "mx-auto animate-fade-in-up animate-duration-slow inset-x-0 mx-auto sm:w-3/4 md:w-2/4 inset-0 flex justify-center align-middle  pt-10 max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg border shadow-2xl dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Cargar nueva receta
              </h3>
              <button
                onClick={closeModal}
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            {/* inputs */}
            <div className="p-4 md:p-5 flex flex-col gap-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nombre de la receta
                </label>
                <input
                  type="text"
                  value={inputTitle}
                  onChange={(e) => {
                    setInputTitle(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Pizza a la piedra"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Descripción
                </label>
                <textarea
                  value={inputDesc}
                  onChange={(e) => {
                    setInputDesc(e.target.value);
                  }}
                  placeholder="2 pocillos de aceite..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              {alert && (
                <div className="bg-red-500 py-2 rounded text-white text-center animate-pulse">
                  Por favor complete los campos.
                </div>
              )}

              <button
                onClick={addRecipe}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar receta!
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
