import React, {useEffect, useState}from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer=()=>{



 
    const [detalles, setDetalles] = useState([]) 
    const detallesProducto= fetch('https://dummyjson.com/products/1')
    .then(res => res.json())

    useEffect(()=>{

    
    detallesProducto.then(res=>{
            setDetalles(res)
        });
    }, [] )

    return(
        <>
        <ItemDetail detalles={detalles} />
        </>
    )
}

export default ItemDetailContainer