
import React, {useEffect, useState} from "react"
import "../itemListFolder/itemListContainer.css"
import ItemCount from "../itemListFolder/ItemCount"
import ItemList from "./ItemList"



const productosSuper = [

    { name: "Tomate", price: "30", stock: "10", id:"1"},
    { name: "Cebolla", price: "40", stock: "150", id:"2"},
    { name: "Salsa", price: "300", stock: "104", id:"4"},
    { name: "Ajo", price: "258", stock: "1", id:"5"}
    
    ]

function ItemListContainer(){

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productosSuper);
        },5000);
    }) 

    const [articulos, setArticulos] = useState([]) 

    useEffect(()=>{
        promise.then(res=>{
            setArticulos(res)
        });
    }, [] )
    

    let arrayCart= [] 
   const onAdd= (object)=>{
    arrayCart.push(object)        
    }
    return(
        <>
        <div  className="sectionCenter">
        <ItemCount stock={10} initial={1} onAdd={()=> onAdd(0)}/>
        <ItemCount stock={7} initial={1} onAdd={()=> onAdd(0)}/>
        <ItemCount stock={4} initial={1} onAdd={()=> onAdd(0)}/>
        <ItemCount stock={0} initial={0} onAdd={()=> onAdd(0)}/>
        </div>
        <div className="sectionCenter">
        <ItemList articulos={articulos}/>
        </div>
        </>
        

)
}

export default ItemListContainer