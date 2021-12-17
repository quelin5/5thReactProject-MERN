import React from "react";
import ListadoProyectos from "../proyectos/ListadoProyectos";
import NuevoProyectoForm from "../proyectos/NuevoProyectoForm";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NuevoProyectoForm />
      <div className="proyectos">
        <h2>Tus proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
