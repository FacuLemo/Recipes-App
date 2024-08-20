import { useNavigate } from "react-router-dom";

export default function RecipeCard({ id, recipe_title, recipe_description }) {
  const Navigate = useNavigate();

  return (
    <div className="m-5 max-w-sm min-w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a onClick={() => Navigate("/recipe/" + id)} className="cursor-pointer">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {recipe_title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {recipe_description.length > 100
          ? recipe_description.slice(0, 100) + "..."
          : recipe_description}
      </p>
      <a
        onClick={() => Navigate("/recipe/" + id)}
        className=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      >
        Ver más
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
      </a>
    </div>
  );
}
