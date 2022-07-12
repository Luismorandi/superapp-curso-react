import React, { useEffect, useState } from "react";
import "../itemListFolder/itemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const url = categoryId
      ? `https://fakestoreapi.com/products/category/${categoryId}`
      : "https://fakestoreapi.com/products";

    fetch(url)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .finally(() => setLoaded(false));
  }, [categoryId]);

  return (
    <div className="sectionCenterItemList">
      {loaded ? <CircularProgress /> : <ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;
