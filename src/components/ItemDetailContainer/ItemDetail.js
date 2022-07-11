import React, { useState, useEffect, useContext } from "react";
import "../ItemDetailContainer/itemDetail.css"
import ItemCount from "../ItemDetailContainer/ItemCount";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { context } from "../context/CartContextProvider"


const ItemDetail =({product})=>{

    let productArray = JSON.parse(JSON.stringify(product));

    const {productsCart, addProductsCart, removeProducts, quantityProducts} = useContext(context);
    console.log(productArray)
    console.log(productArray.id)
    console.log(productsCart)

    
    const [image, setImage] = useState(true);
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(product.image) 
        },1000)});

    const [endPurshase, setEndPurshase] = useState(true);    
    const addProducts = () => {
        setEndPurshase(false);

    }    

    useEffect(()=>{
        promise.then (() => setImage(false))});
    

    return(        
        <div className="sectionCenterDetail">
            <div className="leftSectionDetail">
                {image ? <CircularProgress /> : <img src={product.image} alt="" />}
                <h5>{product.description}</h5>
            </div>
            <div className="rightSectionDetail">
                <h1>{product.title}</h1>
                <h3>${product.price} Pesos.</h3>
                {endPurshase ? <ItemCount stock={10} initial={1} addProducts={addProducts}/>: <Link to={`/cart`}> <button className="buttonDetail"> ¡Compra Finalizada! </button> </Link>}
                <button onClick={()=> addProductsCart(productArray)}>aprieta</button>
                <button onClick={()=> removeProducts(productArray)}>aprieta</button>

            </div> 
        </div>
    )

}

export default ItemDetail