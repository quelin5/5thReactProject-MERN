import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO } from "../../types";

const proyectos = [
  { id: 1, nombre: "Tienda virtual" },
  { id: 2, nombre: "Intranet" },
  { id: 3, nombre: "Diseño de sitio web" },
  { id: 4, nombre: "Diseño de sitio web" },
];

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [],
    formulario: false,
  };

  // Dispach para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = (proyectos) => {};

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
