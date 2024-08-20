import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Error from "./pages/Error";
import RecipeDetail from "./pages/RecipeDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RecipeContextProvider } from "./contexts/RecipesContext";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetail />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipeContextProvider>
      <RouterProvider router={router} />
    </RecipeContextProvider>
  </React.StrictMode>
);
