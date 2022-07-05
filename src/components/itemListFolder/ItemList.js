import Item from "./Item"
import { Link } from "react-router-dom"

const ItemList = ({detalles }) => { 

  
    return (

        <>
               {detalles.map((detalle, i)=>{
            return <Item key={detalle.id} name={detalle.title} price={detalle.price} stock={detalle.stock} id={detalle.id} />

        })

        }
        

        
</>

)}

export default ItemList