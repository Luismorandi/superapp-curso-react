import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  let { productId } = useParams();
  window.scrollTo(0, 0)
  useEffect(() => {
    const productsColletions = collection(db, "products");

    getDocs(productsColletions).then((res) => {
      const products = res.docs.map((product) => {
        return {
          id: product.id,
          ...product.data(),
        };
      });
      const selectedProduct = products.find((element) => element.id === productId);
      setSelectedProduct(selectedProduct);
    });
  }, [productId]);

  return (
    <>
      <ItemDetail selectedProduct={selectedProduct} />
    </>
  );
};

export default ItemDetailContainer;
