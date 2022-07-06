import React, {useEffect, useState}from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer=()=>{
 
    const [detalles, setDetalles] = useState([]) 
    let {productId} = useParams()

    useEffect(()=>{
        const url=   `https://fakestoreapi.com/products/${productId}`
        fetch(url)   
            .then(res=> res.json())
            .then(res => setDetalles(res))
            }, [productId] )

    return(
        <>
        <ItemDetail detalles={detalles} />
        </>
    )
}

export default ItemDetailContainer