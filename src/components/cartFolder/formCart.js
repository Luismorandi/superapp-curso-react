import { useState, useContext } from "react";
import "./formCart.css";
import { context } from "../context/CartContextProvider";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.error("¡Uy! Parece que faltó un campo del formulario por llenar.");

const FormCart = ({ checkOut, totalOfCart }) => {
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
    if (
      (personalData.nombre && personalData.apellido && personalData.mail).trim()
        .length > 0
    ) {
      checkOut(personalData);
      removeAllProducts();
    } else {
      notify();
    }
  };

  return (
    <section className="section-checkout">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="heading-checkout">Detalles de pago</h2>

      <div className="form-cart">
        <div className="form-method ">
          <button className="method selected button-payment-cart">
            <CreditCardIcon className="card1" />

            <span>Tarjeta de Credito</span>

          
          </button>

          <button className="method button-payment-cart">
            <CurrencyBitcoinIcon className="logo-paypal" />

            <span>Bitcoin</span>

          </button>
        </div>

        <form action="#">
          <div className="div-input-cart">
            <label className="label-cart labelCart">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="input-cart inputCart"
              placeholder=""
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="div-input-cart">
            <label className="label-cart labelCart">Apellido</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              className="input-cart inputCart"
              placeholder=""
              onChange={handleInputChange}
            />
          </div>
          <div className="div-input-cart">
            <label className="label-cart labelCart">Mail</label>
            <input
              type="text"
              name="mail"
              id="mail"
              className="input-cart inputCart"
              placeholder=""
              onChange={handleInputChange}
            />
          </div>
          <div className="div-input-cart">
            <label className="label-cart labelCart">Tarjeta de Credito</label>
            <input
              type="text"
              name="tdc"
              id="tdc"
              className="input-cart inputCart"
              placeholder="1111-1111-1111-1111"
              readOnly
            />
          </div>

          <div className="inputFlex-checkout">
            <div className="expire-date">
              <label htmlFor="expire-date" className="label-cart labelCart">
                Expiration date
              </label>

              <div className="inputFlex-checkout">
                <input
                  type="number"
                  placeholder="11"
                  className="input-cart inputCart"
                  readOnly
                />

                <input
                  type="number"
                  placeholder="11"
                  className="input-cart inputCart"
                  readOnly
                />
              </div>
            </div>

            <div className="cvv">
              <label htmlFor="cvv" className="label-cart labelCart">
                CVV
              </label>
              <input
                type="number"
                name="cvv"
                id="cvv"
                className="input-cart inputCart"
                placeholder="1111"
                readOnly
              />
            </div>
          </div>
        </form>
        <button className="btn btn-primary button-payment-cart" onClick={finish}>
          <b>Pagar</b> $ <span id="payAmount">{totalOfCart + 10.0}</span>
        </button>
      </div>
    </section>
  );
};

export default FormCart;
