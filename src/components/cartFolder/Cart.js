import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/CartContextProvider";
import "./cart.css";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import FormCart from "./formCart";
import emptyCart from "../../../src/assets/noProducts.png";
import DetailCart from "./detailCart";

const Cart = () => {
  const { productsCart, removeProducts } = useContext(context);
  const [sectionCheckout, setSectionCheckout] = useState(true);
  const [congratulation, setCongratulation] = useState(true)

  const productsDetailToBuyer = productsCart.map((product, i) => {
    return {
      price: product.price,
      id: product.id,
      title: product.title,
      amount: product.amount,
    };
  });
  const totalOfCart = productsCart.reduce(function (count, object) {
    return count + object.price * object.amount;
  }, 0);

  const checkOut = (personalData) => {
    const docOrder = collection(db, "orders");
    addDoc(docOrder, {
      personalData,
      productsDetailToBuyer,
      date: serverTimestamp(),
      total: (totalOfCart +10.00),
    })
  
  };

  const goToCheckout = () => {
    setSectionCheckout(false);
  };

  return (
    <>
      {productsCart.length === 0 ? (
        <Link to="/">
          <div className="sectionCenterCart">
            <img src={emptyCart} alt="" />
          </div>
          <h1 className="sectionCenterCart">
            ¡No hay productos! Clickea acá para volver a la tienda.
          </h1>
        </Link>

        
      ) : (
        <main class="containerCart">
          <h1 class="heading">Carrito de compras</h1>
          <div class="item-flex">
            {/* <!--
   - checkout section
  --> */}
            <FormCart checkOut={checkOut} totalOfCart={totalOfCart} />

            {/* <!--
    - cart section
  --> */}
            <DetailCart totalOfCart={totalOfCart} />
          </div>
        </main>
      )}
    </>
  );
};

export default Cart;
