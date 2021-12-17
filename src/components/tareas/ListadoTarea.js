import React, { Fragment } from "react";
import Tarea from "../tareas/Tarea";

const ListadoTareas = () => {
  const tareas = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir colores", estado: false },
    { nombre: "Elegir plataforma de pago", estado: false },
    { nombre: "Elegir hosting", estado: true },
  ];

  return (
    <Fragment>
      <h2>Proyeto: Tienda Virtual</h2>
      <ul>
        {tareas.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareas.map((tarea) => <Tarea tarea={tarea} />)
        )}
        <button type="button" className="btn btn-eliminar">
          Eliminar proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
