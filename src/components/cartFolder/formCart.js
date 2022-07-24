import { useState, useContext } from "react";
import "./formCart.css";
import { context } from "../context/CartContextProvider";

const FormCart = ({ checkOut }) => {
  const { removeAllProducts } = useContext(context);
  const [personalData, setPersonalData] = useState({
    nombre: "",
    apellido: "",
    mail: "",
  });

  const handleInputChange = (event) => {
    setPersonalData({
      ...personalData,
      [event.target.name]: event.target.value,
    });
  };

  const finish = () => {
    checkOut(personalData);
    removeAllProducts();
  };

  return (
    <div className="widthForm">
      <h1>Datos de facturación</h1>
      <form action="">
        <div>
          <input
            className="inputWidthcontrols"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="inputWidthcontrols"
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Ingresa tu Apellido"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="inputWidthcontrols"
            type="text"
            id="mail"
            name="mail"
            placeholder="Ingresa tu Mail"
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div>
        <button className="buttonCard" onClick={finish}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default FormCart;
