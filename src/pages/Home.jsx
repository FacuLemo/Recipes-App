import { Fragment } from "react";
import Navbar from "../components/Navbar";
import ModalCreate from "../components/ModalCreate";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-around mt-10">
        <h1 className="text-4xl ">Bienvenido al recetario React</h1>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Nueva receta
        </button>
        {/* <ModalCreate/> */}
      </div>
    </Fragment>
  );
}
