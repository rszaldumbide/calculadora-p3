import React from "react";

function Logo(props) {
  return (
    <img
      className={props.css}
      src={props.rutaLogo}
      alt={props.nombreAlt}
    />
  );
}

export default Logo;
