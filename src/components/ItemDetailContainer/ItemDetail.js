import React, { useState, useEffect } from "react";
import "../ItemDetailContainer/itemDetail.css";
import ItemCount from "../ItemDetailContainer/ItemCount";
import { CircularProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ItemDetail = ({ selectedProduct }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const images = Array.isArray(selectedProduct.image)
    ? selectedProduct.image
    : [selectedProduct.image];

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(images); //
    }, 1000);
  });

  useEffect(() => {
    promise.then(() => setImageLoaded(true));
  }, [promise]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <>
      {imageLoaded === false ? (
        <div className="section-center-circular">
          <CircularProgress />
        </div>
      ) : (
        <div className="section-center-detail">
          <div className="container-detail">
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <Slider {...settings}>
                    {images.map((img, index) => (
                      <div key={index}>
                        <img
                          src={img}
                          className="img-detail"
                          alt={`Producto ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              <div className="product-div-right">
                <span className="product-name">{selectedProduct.title}</span>
                <span className="product-price">${selectedProduct.price}</span>
                <div className="product-rating">
                  {/* Aquí puedes agregar tu lógica para el rating */}
                </div>
                <p className="product-description">
                  {selectedProduct.description}
                </p>
                <div className="item-action">
                  <ItemCount
                    stock={selectedProduct.stock}
                    selectedProduct={selectedProduct}
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
