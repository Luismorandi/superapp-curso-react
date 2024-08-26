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
  console.log(selectedProduct);

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

              <div className="product-div-right" style={{ padding: "20px" }}>
                <span
                  className="product-name"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  {selectedProduct.title}
                </span>
                <span
                  className="product-price"
                  style={{
                    fontSize: "24px",
                    color: "#ff4500",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "20px",
                  }}
                >
                  ${selectedProduct.price} USD
                </span>
                <div
                  className="product-rating"
                  style={{ marginBottom: "20px" }}
                >
                  {/* Aquí puedes agregar tu lógica para el rating */}
                </div>
                <div
                  className="product-description"
                  style={{ lineHeight: "1.6" }}
                >
                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                    Descripción:
                  </h3>
                  <p style={{ marginBottom: "20px" }}>
                    {selectedProduct?.description?.summary}
                  </p>

                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                    Desperfectos:
                  </h3>
                  <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                    {selectedProduct?.description.defects?.map(
                      (defect, index) => (
                        <li key={index}>•{defect}</li>
                      )
                    )}
                  </ul>

                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                    Link al Artículo Nuevo:
                  </h3>
                  <p>
                    <a
                      href={selectedProduct?.description?.newProductLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#007bff",
                        textDecoration: "underline",
                        display: "block",
                        wordBreak: "break-all",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                    >
                      {selectedProduct?.description?.newProductLink}
                    </a>
                  </p>
                </div>
                <div className="item-action" style={{ marginTop: "20px" }}>
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
