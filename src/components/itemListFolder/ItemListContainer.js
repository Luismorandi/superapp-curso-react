
import "../itemListFolder/itemListContainer.css"
import ItemCount from "../itemListFolder/ItemCount"

function ItemListContainer({name, numero}){

    let arrayCart= [] 
   const onAdd= (object)=>{
    arrayCart.push(object)        
    }
    return(
        <div  className="sectionCenter">
        <ItemCount stock="10" initial="1" onAdd={()=> onAdd(0)}/>
        <ItemCount stock="7" initial="1" onAdd={()=> onAdd(0)}/>
        <ItemCount stock="4" initial="1" onAdd={()=> onAdd(0)}/>
        </div>

    )
}

export default ItemListContainer