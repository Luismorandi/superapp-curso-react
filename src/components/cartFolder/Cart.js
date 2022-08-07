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
  const { productsCart } = useContext(context);
  const [congratulation, setCongratulation] = useState(false);
  const [id, setId] = useState("");

  window.scrollTo(0, 0)


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
    setCongratulation(true)
    addDoc(docOrder, {
      personalData,
      productsDetailToBuyer,
      date: serverTimestamp(),
      total: (totalOfCart +10.00),
    })
    .then((res)=>{
      setId(res.id);
     
    })
  
  };



  return (
    <>
      {productsCart.length === 0  ? (

        <Link to="/">
          <div className="sectionCenter-cart">
          <img src={congratulation===true  ? finishBuy : emptyCart} alt="" className="img-notify-cart"/>
            
          </div>
          <h1 className="  sectionCenterNotify-cart">
            {congratulation===true  ? `Tu compra con el ID ${id} va en camino. Clickea acá para seguir comprando.`: "¡No hay productos! Clickea acá para volver a la tienda."  }
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
