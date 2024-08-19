import React, { useContext } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { context } from "../context/CartContextProvider";
import "./detailCart.css";

const DetailCart = ({ totalOfCart }) => {
  const { productsCart, removeProducts, removeAllProducts, reservedProduct } =
    useContext(context);

  return (
    <section className="cart-detail">
      <div className="cart-box-detail">
        <h2 className="heading-cart-detail">Detalles de compra</h2>

        {productsCart.map((product, i) => {
          return (
            <div key={product.id} className="product-card">
              <div className="card1">
                <div>
                  <img
                    src={
                      Array.isArray(product.image)
                        ? product.image[0]
                        : product.image
                    }
                    width="80px"
                    alt="producto"
                  />
                </div>

                <div className="detail">
                  <h4 className="product-name">{product.title}</h4>

                  <div className="wrapper">
                    <div className="product-qty">
                      <span> Cantidad: {product.amount}</span>
                    </div>

                    <div>
                      Precio $ <span>{product.price}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="product-close-btn "
                  onClick={() => removeProducts(product)}
                >
                  <RemoveCircleOutlineIcon> </RemoveCircleOutlineIcon>
                </button>
              </div>
            </div>
          );
        })}

        <button className="btn-detail  " onClick={() => removeAllProducts()}>
          Eliminar productos
        </button>
        <button
          className="btn-detail-reserved "
          onClick={() => reservedProduct(productsCart)}
        >
          Reservar
        </button>
      </div>

      <div className="wrapper">
        <div className="amount">
          <div>
            <span>Total</span>{" "}
            <span>
              $ <span>{totalOfCart.toFixed(2)}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCart;
