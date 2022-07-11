import React, {useEffect, useState}from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer=()=>{
 
    const [product, setproduct] = useState([]) 
    let {productId} = useParams()

    useEffect(()=>{
        const url=   `https://fakestoreapi.com/products/${productId}`
        fetch(url)   
            .then(res=> res.json())
            .then(res => setproduct(res))
            }, [productId] )

    return(
        <>
        <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer