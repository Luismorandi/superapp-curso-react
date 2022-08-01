import React, { useState, useEffect, useContext } from "react";
import "../ItemDetailContainer/itemDetail.css";
import ItemCount from "../ItemDetailContainer/ItemCount";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { context } from "../context/CartContextProvider";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Agregaste con exito el articulo.");

const ItemDetail = ({ product }) => {
  const [image, setImage] = useState(false);
  const [count, setCount] = useState(1);
  const [goToPay, setGoToPay] = useState(false);
  const { addProductsCart } = useContext(context);

  const countPushToState = (countOriginal) => {
    setCount(countOriginal);
  };

  const goToPayFunction = () => {
    setGoToPay(true);
    notify();
    setCount(1);
  };
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product.image);
    }, 1000);
  });

  useEffect(() => {
    promise.then(() => setImage(true));
  });

  return (
    <>
      {image === false ? (
        <div className="section-center-circular">
          <CircularProgress />{" "}
        </div>
      ) : (
        <div className="section-center-detail">
          <Toaster position="top-center" reverseOrder={false} />
          <div className="container-detail">
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <img src={product.image} className="img-detail" />
                </div>
              </div>

              <div className="product-div-right">
                <span className="product-name">{product.title}</span>
                <span className="product-price">${product.price}</span>
                <div className="product-rating">
                  <div>
                    {product.rating >= 1 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                    {product.rating >= 2 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                    {product.rating >= 3 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                    {product.rating >= 4 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                    {product.rating >= 5 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                  </div>
                  <span>({product.rating})</span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="item-action">
                  <ItemCount
                    stock={product.stock}
                    countPushToState={countPushToState}
                    count={count}
                    className=""
                  />
                  <button
                    type="button"
                    className="add-cart-btn"
                    onClick={() =>
                      addProductsCart(product, count, goToPayFunction())
                    }
                  >
                    Agregar a Carrito
                  </button>
                  {goToPay === true ? (
                    <Link to={`/cart`}>
                      <button className="buy-btn"> ¡Ir a pagar! </button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
