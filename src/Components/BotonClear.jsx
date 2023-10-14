import React from "react";
import "../assets/stylesheets/BotonClear.css";

const BotonClear = (props) => (
  <div className="clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
