import React, { useState, useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../ItemDetailContainer/itemCount.css";
import { context } from "../context/CartContextProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const notify = () => toast.success("Agregaste con exito el articulo.");

const ItemCount = ({ stock, selectedProduct }) => {
  const [goToPay, setGoToPay] = useState(false);
  const [count, setCount] = useState(1);
  const { addProductsCart } = useContext(context);
  const [stockCopy, setStockCopy] = useState(stock);

  const addCountClick = () => {
    if (count < stockCopy) {
      setCount(count + 1);
    }
  };

  const removeCountClick = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const goToPayFunction = (count) => {
    setGoToPay(true);
    notify();
    setCount(0);
    setStockCopy(stock - count);
  };

  return (
    <>
      <div className="section-center-count">
        <Toaster position="top-center" reverseOrder={false} />
        <RemoveIcon onClick={removeCountClick} className="icon-count" />
        <p>{count}</p>
        <AddIcon
          onClick={() => {
            addCountClick();
          }}
          className="icon-count"
        />
      </div>
      {stockCopy > 0 ? (
        <button
          type="button"
          className="add-cart-btn"
          onClick={() =>
            addProductsCart(selectedProduct, count, goToPayFunction(count))
          }
        >
          Agregar a Carrito
        </button>
      ) : null}
      {goToPay === true ? (
        <Link to={`/cart`}>
          <button className="buy-btn"> ¡Reservar! </button>
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default ItemCount;
