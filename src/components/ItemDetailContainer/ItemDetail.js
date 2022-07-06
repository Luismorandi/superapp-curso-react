import React from "react";
import "../ItemDetailContainer/itemDetail.css"
import ItemCount from "../itemListFolder/ItemCount";

const ItemDetail =({detalles})=>{

    

    return(
        
        <div className="sectionCenterDetail">
            <div className="leftSection">
        
                {<img src={detalles.image} alt="" />}
                <h5>{detalles.description}</h5>
                
            </div>
            <div className="rightSection">

        <h1>{detalles.title}</h1>
        <h3>${detalles.price} Pesos.</h3>

        <ItemCount stock={10} initial={1}/>
        <button className="buttonDetail"> Agregar al Carrito</button>
            </div>
        
        </div>
    )

}

export default ItemDetail