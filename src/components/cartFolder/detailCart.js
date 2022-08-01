import React, { useContext, useState } from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { context } from "../context/CartContextProvider";
import "./detailCart.css";


const DetailCart = ({totalOfCart}) =>{

    const { productsCart, removeProducts } = useContext(context);


    return(
        <section class="cart">
              <div class="cart-item-box">
                <h2 class="heading-cart">Detalles de compra</h2>

                {productsCart.map((product, i) => {
                  return (
                    <div className="product-card">
                      <div className="card1">
                        <div className="img-box">
                          <img
                            src={product.image}
                            alt="Green tomatoes"
                            width="80px"
                            className="product-img imgCart"
                          />
                        </div>

                        <div className="detail">
                          <h4 className="product-name">{product.title}</h4>

                          <div className="wrapper">
                            <div className="product-qty">
                              <span id="quantity"> Cantidad: {product.amount}</span>
                            </div>

                            <div class="price">
                             Precio $ <span id="price">{product.price}</span>
                            </div>
                          </div>
                        </div>

                        <button className="product-close-btn " onClick={()=>removeProducts(product)}>
                          <RemoveCircleOutlineIcon > </RemoveCircleOutlineIcon>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div class="wrapper">
                <div class="amount">
                  <div class="subtotal">
                    <span>Subtotal</span>{" "}
                    <span>
                      $ <span id="subtotal">{totalOfCart.toFixed(2)}</span>
                    </span>
                  </div>
                  <div class="shipping">
                    <span>Envio</span>{" "}
                    <span>
                      $ <span id="shipping">{10.0}</span>
                    </span>
                  </div>

                  <div class="total">
                    <span>Total</span>{" "}
                    <span>
                      $ <span id="total">{(totalOfCart + 10.0).toFixed(2)}</span>
                    </span>
                  </div>
                </div>
              </div>
            </section>

    )
}

export default DetailCart