import React from "react";
import "../assets/stylesheets/Boton.css";

function Boton(props) {
  const esOperador = (val) => {
    return isNaN(val) && val !== "." && val !== "=";
  };

  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={()=>props.manejarClic(props.children)}>
      {props.children}
    </button>
  );
}

export default Boton;
