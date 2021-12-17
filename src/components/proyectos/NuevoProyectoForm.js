import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyectoForm = () => {
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  const onChange = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer el nombre del proyecto
  const { nombre } = proyecto;

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar el proyecto

    // Agregar al State

    // Iniciar el Form
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre proyecto"
            name="nombre"
            value={nombre}
            onChange={onChange}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar proyecto"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyectoForm;
