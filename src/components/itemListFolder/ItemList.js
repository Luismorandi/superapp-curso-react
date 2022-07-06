import Item from "./Item"


const ItemList = ({detalles }) => { 

  
    return (

        <>
               {detalles.map((detalle, i)=>{
            return <Item key={detalle.id} name={detalle.title} price={detalle.price}  id={detalle.id} image={detalle.image}/>

        })

        }
        

        
</>

)}

export default ItemList