import "../itemListFolder/item.css";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Item = ({ name, price, id, image, rating, category }) => {
  const porcentaje = Math.random() + 1;
  const priceBeforeDiscount = porcentaje * price;
  const discountPercentaje = (price * 100) / priceBeforeDiscount - 100;

  return (
    <Link className="linkToCard-item" to={`/products/${id}`}>
      <div className="cardStyle-item">
        <div>{<img className="imageOfCard-item" src={image} alt="" />}</div>
        <div className="infoOfCard-item">
          <h3 className="offerOfCard-item">{discountPercentaje.toFixed(0)}% OFF</h3>
          <h3 className="categoryOfCard-item">{category}</h3>
          <h3 className="nameOfCard-item">{name}</h3>
          <div>
            {rating >= 1 ? (
              <StarIcon className="ratingOfCard-item" />
            ) : (
              <StarBorderIcon className="ratingOfCard-item" />
            )}
            {rating >= 2 ? (
              <StarIcon className="ratingOfCard-item" />
            ) : (
              <StarBorderIcon className="ratingOfCard-item" />
            )}
            {rating >= 3 ? (
              <StarIcon className="ratingOfCard-item" />
            ) : (
              <StarBorderIcon className="ratingOfCard-item" />
            )}
            {rating >= 4 ? (
              <StarIcon className="ratingOfCard-item" />
            ) : (
              <StarBorderIcon className="ratingOfCard-item" />
            )}
            {rating >= 5 ? (
              <StarIcon className="ratingOfCard-item" />
            ) : (
              <StarBorderIcon className="ratingOfCard-item" />
            )}
          </div>
          <div className="priceBox-item">
            <h3 className="priceOfCard-item">${price}</h3>
            <h3>
              <del>${priceBeforeDiscount.toFixed(2)}</del>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
