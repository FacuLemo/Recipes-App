import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Error from "./pages/Error";
import RecipeDetail from "./pages/RecipeDetail";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecipeContextProvider } from "./contexts/RecipesContext";
import { LoginContextProvider } from "./contexts/LoginContext";
import "./index.css";

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const logged = sessionStorage.getItem("usuarioSesion");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <RecipeContextProvider>
        {logged ? (
          <RouterProvider router={authRouter} />
        ) : (
          <RouterProvider router={router} />
        )}
      </RecipeContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
