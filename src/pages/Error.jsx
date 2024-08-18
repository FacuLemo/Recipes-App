import { Fragment } from "react";
import Navbar from "../components/Navbar";
import coconut from "../../public/coconut.jpeg";

export default function Error() {
  return (
    <Fragment>
      <Navbar />
      <div className="text-center mt-40">
        <div className="flex justify-center">
          <img src={coconut} />
        </div>
        <h1 className="text-4xl ">¡oops! Página no encontrada.</h1>
      </div>
    </Fragment>
  );
}
