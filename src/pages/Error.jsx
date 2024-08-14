import { Fragment } from "react";
import Navbar from "../components/Navbar";

export default function Error() {
  return (
    <Fragment>
      <Navbar />
      <div className="text-center mt-40">
        <div className="flex justify-center">
          <img src="coconut.jpeg" />
        </div>
        <h1 className="text-4xl ">¡oops! Página no encontrada.</h1>
      </div>
    </Fragment>
  );
}
