import "../itemListFolder/item.css"
import { Link } from "react-router-dom"

const Item = ({name, price,id, image }) => {
    return(

    <div className="card" >
        <div>
            {<img className="image"src={image} alt="" />}
        </div>
        <div className="infoCard">
            <h3 className="nameOfItem">{name}</h3>
            <h3 className="priceOfItem">${price}</h3>
        </div>
        <div className="detailButtonCard" >
            <Link to={`/products/${id}`}> <button className="buttonCard"> Ver detalles de producto </button> </Link> 
        </div>
    </div>  
    )
}

export default Item