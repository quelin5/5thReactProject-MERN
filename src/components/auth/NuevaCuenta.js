import React, { useState } from "react";

import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // Extraer del usuario
  const { nombre, email, password, confirmar } = usuario;

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

    // Minimo 6 caracteres

    // Dos paswords sean iguales

    // Pasarlo al 'action'
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crea una cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="tu nombre"
              value={nombre}
              onChange={onChangeInicialSesion}
            />
          </div>
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
            <label htmlFor="confirmar">Confirmar password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="repite tu password"
              value={confirmar}
              onChange={onChangeInicialSesion}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-block btn-primario"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
