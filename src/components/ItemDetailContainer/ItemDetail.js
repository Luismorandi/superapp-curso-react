import React, { useState, useEffect, useContext } from "react";
import "../ItemDetailContainer/itemDetail.css"
import ItemCount from "../ItemDetailContainer/ItemCount";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { context } from "../context/CartContextProvider"


const ItemDetail =({product})=>{

    const [image, setImage] = useState(true);
    const [countCopy, setCountCopy] = useState(1);
    const { addProductsCart } = useContext(context);
    
    
    const countOfItemCount = (countOriginal) =>{
        setCountCopy(countOriginal)
    }
    
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(product.image) 
        },1000)});


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
                    <ItemCount stock={10} initial={1} countOfItemCount={countOfItemCount}/> 
                    <Link to={`/cart`}> <button className="buttonDetail" onClick={()=> addProductsCart(product, countCopy)}> ¡Comprar! </button> </Link>
                </div> 
            </div>
        )

}

export default ItemDetail