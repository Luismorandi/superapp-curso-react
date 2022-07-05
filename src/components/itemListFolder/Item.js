import "../itemListFolder/itemCount.css"
import { Link } from "react-router-dom"
const Item = ({name, price, stock,id }) => {

    return(

        

    <div className="countCard2" >
        
        <div className="countCard">
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>
        <div>
            <h4>Quedan {stock}</h4>
        </div>
        <div className="countCard3" >
            <Link to={`/products/${id}`}> <button> Ver detalles de producto </button> </Link> 
        </div>
    </div>
   
    )
}

export default Item