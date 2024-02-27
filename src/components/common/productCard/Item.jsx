import { Link } from "react-router-dom";
import "./Item.css";
export const Item = ({ id, img, title, description, price }) => {
  return (
    <div  className="cardContainer">
      <img src={img} alt={title}  />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{price}</p>
      <Link to={`/item/${id}`}>
        <button>Detalles</button>
      </Link>

    </div>
  );
};
