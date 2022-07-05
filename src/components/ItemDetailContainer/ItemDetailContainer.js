import React, {useEffect, useState}from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer=()=>{
 
    const [detalles, setDetalles] = useState([]) 
    let productId = useParams()
    const id = productId
    const idd= id.productId


 

     useEffect(()=>{

        const url=   `https://fakestoreapi.com/products/${idd}`

  
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