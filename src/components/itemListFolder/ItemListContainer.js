
import React, {useEffect, useState} from "react"
import "../itemListFolder/itemListContainer.css"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"





function ItemListContainer(){

    const [detalles, setDetalles] = useState([]) 
    const [loaded, setLoaded] = useState(true)
    const {categoryId} = useParams();
    
    useEffect(()=>{
        const url= categoryId ?  `https://fakestoreapi.com/products/category/${categoryId}`: 'https://fakestoreapi.com/products' ;
        
    fetch(url)   
        .then(res=> res.json())
        .then(res => setDetalles(res))
        .finally(()=> setLoaded(false))
        }, [categoryId] )

    return(
        <div className="sectionCenter">

        {loaded ? <h1> hola buenas</h1> : <ItemList detalles={detalles} />}
        </div>
    )


    }

export default ItemListContainer