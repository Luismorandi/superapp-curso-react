import React, { useEffect, useState } from "react";
import "../itemListFolder/itemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsColletions = collection(db, "products");
    const q = query(
      productsColletions,
      where("category", "==", `${categoryId}`)
    );

    const url = categoryId ? q : productsColletions;

    getDocs(url)
      .then((result) => {
        const productList = result.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProducts(productList);
      })
      .finally(() => setLoaded(false));
  }, [categoryId]);

  return (
    <div className="sectionCenterItemList">
      {loaded ? (
        <CircularProgress className="circular-progress" />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
