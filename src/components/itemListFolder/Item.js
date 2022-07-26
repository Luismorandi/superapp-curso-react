import "../itemListFolder/item.css"
import { Link } from "react-router-dom"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Item = ({name, price,id, image, rating, category }) => {
    
const porcentaje = Math.random()+1;
const priceBeforeDiscount= porcentaje * price;
const discountPercentaje = ((price * 100) / priceBeforeDiscount) - 100;


    return(
    <Link className="linkCard" to={`/products/${id}`}> 
    <div className="card" >
        <div>
            {<img className="image"src={image} alt="" />}
        </div>
        <div className="infoCard">
        <h3 className="offerOfItem">{discountPercentaje.toFixed(0)}% OFF</h3>
            <h3 className="categoryOfItem" >{category}</h3>
            <h3 className="nameOfItem">{name}</h3>
            <div>
                {rating >= 1 ? <StarIcon className="ratingOfItem"/> : <StarBorderIcon className="ratingOfItem"/>}
                {rating >= 2 ? <StarIcon className="ratingOfItem"/> : <StarBorderIcon className="ratingOfItem"/>}
                {rating >= 3 ? <StarIcon className="ratingOfItem"/> : <StarBorderIcon className="ratingOfItem"/>}
                {rating >= 4 ? <StarIcon className="ratingOfItem"/> : <StarBorderIcon className="ratingOfItem"/>}
                {rating >= 5 ? <StarIcon className="ratingOfItem"/> : <StarBorderIcon className="ratingOfItem"/>}
            </div>
        <div className="priceBox">
            <h3 className="priceOfItem">${price}</h3>
            <h3><del>${priceBeforeDiscount.toFixed(2)}</del></h3>
            
        </div>    
        </div>
      
    </div>  
    </Link> 
    )
}

export default Item