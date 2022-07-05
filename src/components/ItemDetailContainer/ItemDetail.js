import React from "react";
import "../ItemDetailContainer/itemDetail.css"

const ItemDetail =({detalles})=>{

    

    return(
        
        <div className="sectionCenter">
            <div className="leftSection">
        
                <div>
                    <h5>{detalles.description}</h5>
                </div>
            </div>
            <div className="rightSection">

        <h1>{detalles.title}</h1>
        <h3>${detalles.price} Pesos.</h3>
        <h3>Rating: </h3>
        <button> Agregar al Carrito</button>
            </div>
        
        </div>
    )

}

export default ItemDetail