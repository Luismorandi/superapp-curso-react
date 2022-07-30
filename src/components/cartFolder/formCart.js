import { useState, useContext } from "react";
import "./formCart.css";
import { context } from "../context/CartContextProvider";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

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
    checkOut(personalData);
    removeAllProducts();
  };

  return (
    <section class="section-checkout">
      <h2 class="heading-checkout">Detalles de pago</h2>

      <div class="form-cart">
        <div class="form-method ">
          <button class="method selected button-payment-cart">
            <CreditCardIcon className="card1" />

            <span>Credit Card</span>

            <ion-icon class="checkmark fill" name="checkmark-circle"></ion-icon>
          </button>

          <button class="method button-payment-cart">
            <CurrencyBitcoinIcon className="logo-paypal" />

            <span>Bitcoin</span>

            <ion-icon
              class="checkmark"
              name="checkmark-circle-outline"
            ></ion-icon>
          </button>
        </div>

        <form action="#">
          <div class="div-input-cart">
            <label class="label-cart labelCart">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              class="input-cart inputCart"
              placeholder=""
              onChange={handleInputChange}
            />
          </div>

          <div class="div-input-cart">
            <label class="label-cart labelCart">Apellido</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              class="input-cart inputCart"
              placeholder=""
              onChange={handleInputChange}
            />
          </div>
          <div class="div-input-cart">
            <label class="label-cart labelCart">Mail</label>
            <input
              type="text"
              name="mail"
              id="mail"
              class="input-cart inputCart"
              placeholder=""
              onChange={handleInputChange}
            />
          </div>
          <div class="div-input-cart">
            <label class="label-cart labelCart">Tarjeta de Credito</label>
            <input
              type="text"
              name="tdc"
              id="tdc"
              class="input-cart inputCart"
              placeholder="1111-1111-1111-1111"
              readOnly
            />
          </div>

          <div class="input-flex">
            <div class="expire-date">
              <label for="expire-date" class="label-cart labelCart">
                Expiration date
              </label>

              <div class="input-flex">
                <input
                  type="number"
                  placeholder="11"
                  class="input-cart inputCart"
                  readOnly
                />

                <input
                  type="number"
                  placeholder="11"
                  class="input-cart inputCart"
                  readOnly
                />
              </div>
            </div>

            <div class="cvv">
              <label for="cvv" class="label-cart labelCart">
                CVV
              </label>
              <input
                type="number"
                name="cvv"
                id="cvv"
                class="input-cart inputCart"
                placeholder="1111"
                readOnly
              />
            </div>
          </div>
        </form>
      </div>

      <button class="btn btn-primary button-payment-cart" onClick={finish}>
        <b>Pagar</b> $ <span id="payAmount">{totalOfCart + 10.0}</span>
      </button>
    </section>
  );
};

export default FormCart;
