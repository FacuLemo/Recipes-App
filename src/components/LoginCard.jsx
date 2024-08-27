import { useContext, useState } from "react";
import RecipeSvg from "./RecipeLogoSVG";
import { redirect, useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

export default function LoginCard() {
  const [inputUser, setInputUser] = useState(''),
    [inputPass, setInputPass] = useState(''),
    [alert, setAlert] = useState(false),
    [alertDone, setAlertDone] = useState(false);

  const { registrar, login } = useContext(LoginContext);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await login(inputUser, inputPass);
      window.location.replace("/home")
    } catch (err) {
      setAlert(true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registrar(inputUser, inputPass);
      setAlertDone(true)
    } catch (err) {
      setAlert(true);
    }
  };

  const handleInputPass = (e) => {
    setInputPass(e.target.value);
  };
  const handleInputUser = (e) => {
    setInputUser(e.target.value);
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <RecipeSvg />
          <span className="self-center ml-1 text-2xl font-semibold whitespace-nowrap dark:text-white">
            Mis recetas React
          </span>
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Inicia Sesión
            </h1>
            <form onSubmit={handleSumbit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Usuario
                </label>
                <input
                  type="text"
                  onChange={handleInputUser}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
                  placeholder="pepito"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Contraseña
                </label>
                <input
                  type="password"
                  onChange={handleInputPass}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
                />
              </div>
              {alert && (
                <div className="bg-red-500 rounded text-white text-center py-2 animate-bouncing">
                  Credenciales inválidas
                </div>
              )}
              <button
                type="submit"
                className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Iniciar sesión
              </button>
              <hr />
              <p className="text-sm font-light text-gray-500">
                ¿No tenés cuenta?
                <a onClick={handleRegister}
                 className="font-medium text-teal-600 mx-2 cursor-pointer hover:underline">
                  Registrarse con las credenciales ingresadas
                </a>
              </p>
              {alertDone &&  <div className="bg-green-500 rounded text-white text-center py-2 animate-bouncing">
                  ¡listo! Haz click en iniciar sesión.
                </div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
