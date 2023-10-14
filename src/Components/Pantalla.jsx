import React from "react";
import "../assets/stylesheets/Pantalla.css";

/* esta manera de instanciar o definir el componente, se la hace asi, siempre y cuando el componente no tenga alguna funcion si no solo presentacion*/
const Pantalla = ({ input }) => (
  <div className="entrada">
    {input}
  </div>
);

export default Pantalla;