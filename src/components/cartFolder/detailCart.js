import React, { useContext, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { context } from "../context/CartContextProvider";
import "./detailCart.css";

const DetailCart = ({ totalOfCart }) => {
  const { productsCart, removeProducts } = useContext(context);

  return (
    <section class="cart-detail">
      <div class="cart-box-detail">
        <h2 class="heading-cart-detail">Detalles de compra</h2>

        {productsCart.map((product, i) => {
          return (
            <div className="product-card">
              <div className="card1">
                <div >
                  <img
                    src={product.image}
                    width="80px"
                   
                  />
                </div>

                <div className="detail">
                  <h4 className="product-name">{product.title}</h4>

                  <div className="wrapper">
                    <div className="product-qty">
                      <span > Cantidad: {product.amount}</span>
                    </div>

                    <div >
                      Precio $ <span >{product.price}</span>
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
      </div>

      <div className="wrapper">
        <div className="amount">
          <div>
            <span>Subtotal</span>{" "}
            <span>
              $ <span >{totalOfCart.toFixed(2)}</span>
            </span>
          </div>
          <div >
            <span>Envio</span>{" "}
            <span>
              $ <span >{10.0}</span>
            </span>
          </div>

          <div className="total">
            <span>Total</span>{" "}
            <span>
              $ <span id="total">{(totalOfCart + 10.0).toFixed(2)}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCart;
