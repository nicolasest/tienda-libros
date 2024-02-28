import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Item.css";
export const Item = ({ id, img, title, description, price }) => {
  return (
    <div  className="cardContainer">
      <img src={img} alt={title}  />
      <h1>{title}</h1>
      <h2 className="description">{description}</h2>
      <p className="price">${price}</p>
      <Link to={`/item/${id}`}  style={{textDecoration: "none"}}>
      
      <Stack spacing={2} direction="row" >

<Button variant="outlined">Detalles</Button>
</Stack>
      </Link>
    </div>
  );
};
