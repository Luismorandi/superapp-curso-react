import "../itemListFolder/item.css";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Item = ({ name, price, id, image, rating, category, status }) => {
  const porcentaje = Math.random() + 1;
  const priceBeforeDiscount = porcentaje * price;
  const discountPercentaje = (price * 100) / priceBeforeDiscount - 100;
  if (!Array.isArray(image)) image = [image];

  const statusMap = {
    available: { label: "Disponible", class: "" },
    sold: { label: "VENDIDO", class: "sold-banner" },
    reserved: { label: "RESERVADO", class: "reserved-banner" },
  };

  return (
    <Link className="linkToCard-item" to={`/products/${id}`}>
      <div className="cardStyle-item">
        <div>
          {<img className="imageOfCard-item" src={image[0]} alt="" />}
          {status !== "available" && (
            <div className={statusMap[status].class}>
              {statusMap[status].label}
            </div>
          )}
        </div>
        <div className="infoOfCard-item">
          {/* <h3 className="offerOfCard-item">
            {discountPercentaje.toFixed(0)}% OFF
          </h3> */}
          <h3 className="categoryOfCard-item">{category}</h3>
          <h3 className="nameOfCard-item">{name}</h3>
          {/* <div>
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
          </div> */}
          <div className="priceBox-item">
            <h3 className="priceOfCard-item">${price} USD</h3>
            {/* <h3>
              <del>${priceBeforeDiscount.toFixed(2)}</del>
            </h3> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
