import "./App.css";
import LogoFreecodecamp from "./assets/imgs/freecodecamp-Logo.png";
import Boton from "./Components/Boton.jsx";
import Pantalla from "./Components/Pantalla.jsx";
import BotonClear from "./Components/BotonClear.jsx";
import Logo from "./Components/Logo.jsx";
import { useState } from "react";
import { evaluate } from "mathjs"; /* hay otros metodos para realizar los calculos. */

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      setInput(evaluate("Ingresa los valores para realizar los calculos"));
      /* alert("Ingresa los valores para realizar los calculos");
     */}
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <Logo
          css="freecodecamp-logo"
          rutaLogo={LogoFreecodecamp}
          nombreAlt="Logo de FreecodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Borrar </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
