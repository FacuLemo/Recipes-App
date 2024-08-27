import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false),
    [user, setUser] = useState(null);

  useEffect(() => {
    const usuarioSesion = sessionStorage.getItem("usuarioSesion");
    if (usuarioSesion) {
      setUser(JSON.parse(usuarioSesion));
      setIsAuthenticated(true);
    }
  }, []);

  const registrar = (usuario, contraseña) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExiste = usuarios.find((u) => u.usuario === usuario);

    if (usuarioExiste) {
      throw new Error("el usuario ya existe.");
    }

    const nuevoUsuario = { usuario, contraseña };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  const login = (usuario, contraseña) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find(
      (u) => u.usuario === usuario && u.contraseña === contraseña
    );

    if (!usuarioEncontrado) {
      throw new Error("Credenciales inválidas.");
    }
    sessionStorage.setItem("usuarioSesion", JSON.stringify(usuarioEncontrado));
    setUser(usuarioEncontrado);
    setIsAuthenticated(true);
  };

  const cerrarSesion = () => {
    sessionStorage.removeItem("usuarioSesion");
    setUser(null);
    setIsAuthenticated(false);
    window.location.replace("/");
  };

  return (
    <LoginContext.Provider
      value={{
        isAuthenticated,
        user,
        registrar,
        login,
        cerrarSesion,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
