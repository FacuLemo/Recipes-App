import { Fragment } from "react";
import Navbar from "../components/Navbar";

export default function RecipeDetail() {
  return (
    <Fragment>
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl ">Detalle de receta</h1>
      </div>
    </Fragment>
  );
}
