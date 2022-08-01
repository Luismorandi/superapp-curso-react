import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/CartContextProvider";
import "./cart.css";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import FormCart from "./formCart";
import emptyCart from "../../../src/assets/noProducts.png";
import finishBuy from "../../../src/assets/finishBuy.png"
import DetailCart from "./detailCart";

const Cart = () => {
  const { productsCart, removeProducts } = useContext(context);
  const [sectionCheckout, setSectionCheckout] = useState(true);
  const [congratulation, setCongratulation] = useState(false)


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
    setCongratulation(true);
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
          <div className="sectionCenter-cart">
          <img src={congratulation===true? finishBuy : emptyCart} alt="" />
            
          </div>
          <h1 className="sectionCenter-cart">
            {congratulation===true?"Tu compra va en camino. Clickea acá para seguir comprando.": "¡No hay productos! Clickea acá para volver a la tienda."  }
          </h1>
        </Link>

        
      ) : (
        <main className="container-cart">
          <h1 className="heading">Carrito de compras</h1>
          <div className="item-flex">
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
