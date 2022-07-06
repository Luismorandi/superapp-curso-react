import "../itemListFolder/item.css"
import { Link } from "react-router-dom"
const Item = ({name, price,id, image }) => {

    return(

        

    <div className="countCard2" >
        <div>
            {<img className=" imagen"src={image} alt="" />}
        </div>
        <div className="countCard">
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>

        <div className="countCard3" >
            <Link to={`/products/${id}`}> <button className="buttonItem"> Ver detalles de producto </button> </Link> 
        </div>
    </div>
   
    )
}

export default Item