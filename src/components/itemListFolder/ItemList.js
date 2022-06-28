import Item from "./Item"

const ItemList = ({articulos }) => { 

  
    return (

        <>
               {articulos.map((articulo, i)=>{
            return <Item key={articulo.id} name={articulo.name} price={articulo.price} stock={articulo.stock} id={articulo.id} />

        })

        }
        


</>

)}

export default ItemList