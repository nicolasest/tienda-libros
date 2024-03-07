import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
export const Cart = () => {
  return (
    <>
      <div id="Cart">
        <h1>Cart</h1>
        <Link to="/checkout">
        <Button variant="contained" >Terminar Compra</Button>
        </Link>
      </div>
    </>
  );
};
