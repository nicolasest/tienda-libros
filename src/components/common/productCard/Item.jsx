import { Link } from "react-router-dom";

export const Item = ({ id, img, title, description, price }) => {
  return (
    <div style={{ border: "1px solid black", width: "200px" }}>
      <h1>{title}</h1>
      <p>{price}</p>
      <Link to={`/item/${id}`}>
        <button>Detalles</button>
      </Link>

      <img src={img} alt={title} style={{ width: "200px" }} />
    </div>
  );
};
