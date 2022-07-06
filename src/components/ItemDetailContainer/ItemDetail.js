import React from "react";
import "../ItemDetailContainer/itemDetail.css"
import ItemCount from "../itemListFolder/ItemCount";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const ItemDetail =({detalles})=>{
    
    const [image, setImage] = useState(true);
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(detalles.image) 
        },1000)});

    useEffect(()=>{
        promise.then (() => setImage(false))});
    

    return(        
        <div className="sectionCenterDetail">
            <div className="leftSectionDetail">
                {image ? <CircularProgress /> : <img src={detalles.image} alt="" />}
                <h5>{detalles.description}</h5>
            </div>
            <div className="rightSectionDetail">
                <h1>{detalles.title}</h1>
                <h3>${detalles.price} Pesos.</h3>
                <ItemCount stock={10} initial={1}/>
                <button className="buttonDetail"> Agregar al Carrito</button>
            </div> 
        </div>
    )

}

export default ItemDetail