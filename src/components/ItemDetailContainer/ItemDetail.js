import React from "react";
import "../ItemDetailContainer/itemDetail.css"

const ItemDetail =({detalles})=>{
    const imagen= detalles.images || []
    

    return(
        
        <div className="sectionCenter">
            <div className="leftSection">
                <div>
                    <img src={imagen[0]} alt="" />
                </div>
                <div>
                    <h5>{detalles.description}</h5>
                </div>
            </div>
            <div className="rightSection">

        <h1>{detalles.title}</h1>
        <h3>${detalles.price} Pesos.</h3>
        <h3>Rating: {detalles.rating}</h3>
        <button> Agregar al Carrito</button>
            </div>
        
        </div>
    )

}

export default ItemDetail