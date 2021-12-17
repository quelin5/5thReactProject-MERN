import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  // Extraer del usuario
  const { email, password } = usuario;

  const onChangeInicialSesion = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // Cuandoel usuario quiere iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    // Validación que no haya campos vaciós

    // Pasarlo al 'action'
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu email"
              value={email}
              onChange={onChangeInicialSesion}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="tu password"
              value={password}
              onChange={onChangeInicialSesion}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-block btn-primario"
              value="iniciar sesion"
            />
          </div>
        </form>
        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Crear nueva cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
