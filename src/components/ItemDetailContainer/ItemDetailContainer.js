import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setproduct] = useState([]);
  let { productId } = useParams();

  useEffect(() => {
    const productsColletions = collection(db, "products");

    getDocs(productsColletions).then((res) => {
      const products = res.docs.map((product) => {
        return {
          id: product.id,
          ...product.data(),
        };
      });
      const product = products.find((element) => element.id === productId);
      setproduct(product);
    });
  }, [productId]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
