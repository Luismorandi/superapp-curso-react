import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/CartContextProvider";
import "./cart.css";
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import FormCart from "./formCart";

const Cart = () => {
 
  const { productsCart, removeProducts } = useContext(context);
  const [sectionCheckout, setSectionCheckout] = useState(true);
  console.log(productsCart)
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
      total: totalOfCart,
    })
  };

  
  const goToCheckout = () => {
    setSectionCheckout(false);
  };


  return (
    <>
      {productsCart.length === 0 ? (
        <Link to="/">
          {" "}
          <h1 className="sectionCenterCart">
            ¡No hay productos! Vuelve a tus compras
          </h1>{" "}
        </Link>
      ) : (
        <>
          <div className="sectionCenterCart">
            <table>
              <tr id="colorHeader">
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
              <br />

              {productsCart.map((product, i) => {
                return (
                  <tr key={product.id}>
                    <div>
                      <td>
                        {" "}
                        <img src={product.image} alt="" />
                      </td>
                      <td> {product.title}</td>
                    </div>
                    <td className="alignText">{product.amount}</td>
                    <td className="alignText">${product.price}</td>
                    <td className="alignText" title="Eliminar producto">
                      <button onClick={() => removeProducts(product)}>
                        {" "}
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
              <hr />
              <tr className="">
                <td>
                  {" "}
                  <h2> Total </h2>
                </td>
                <td></td>
                <td>
                  {" "}
                  <h2> ${totalOfCart.toFixed(2)} </h2>
                </td>
              </tr>
              <button className="buttonCart" onClick={goToCheckout}>
                Ir a pagar
              </button>
            </table>
          </div>

          <div className="sectionCenterCart">
            {sectionCheckout ? "" : <FormCart checkOut={checkOut} />}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
