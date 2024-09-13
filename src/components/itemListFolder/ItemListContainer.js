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
  window.scrollTo(0, 0);
  useEffect(() => {
    const productsColletions = collection(db, "products");
    const q = query(
      productsColletions,
      where("category", "==", `${categoryId}`)
    );
    const priority = { available: 1, reserved: 2, sold: 3 };

    const url = categoryId ? q : productsColletions;

    getDocs(url)
      .then((result) => {
        let productList = result.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        productList = productList.sort((a, b) => {
          return priority[a.status] - priority[b.status];
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
        <>
          <div className="banner">
            <p>
              💡 Los precios en <strong>dólares</strong> son de referencia.
              Puedes pagar en <strong>pesos</strong> al{" "}
              <strong>dólar blue</strong> 💸
            </p>
          </div>
          <ItemList products={products} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
