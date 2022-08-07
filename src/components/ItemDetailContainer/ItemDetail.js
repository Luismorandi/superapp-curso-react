import React, { useState, useEffect } from "react";
import "../ItemDetailContainer/itemDetail.css";
import ItemCount from "../ItemDetailContainer/ItemCount";
import { CircularProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";


const ItemDetail = ({ selectedProduct }) => {


  const [image, setImage] = useState(false);



  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(selectedProduct.image);
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
         
          <div className="container-detail">
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <img src={selectedProduct.image} className="img-detail" alt="producto"/>
                </div>
              </div>

              <div className="product-div-right">
                <span className="product-name">{selectedProduct.title}</span>
                <span className="product-price">${selectedProduct.price}</span>
                <div className="product-rating">
                  <div>
                    {selectedProduct.rating >= 1 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                    {selectedProduct.rating >= 2 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                    {selectedProduct.rating >= 3 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                    {selectedProduct.rating >= 4 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                    {selectedProduct.rating >= 5 ? (
                      <StarIcon className="color-star-rating" />
                    ) : (
                      <StarBorderIcon className="color-star-rating" />
                    )}
                  </div>
                  <span>({selectedProduct.rating})</span>
                </div>
                <p className="product-description">{selectedProduct.description}</p>
                <div className="item-action">
                  <ItemCount
                    stock={selectedProduct.stock}
                    selectedProduct={selectedProduct}
                    className=""
                  />
                  
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
