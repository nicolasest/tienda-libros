import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
export const Cart = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);
  return (
    <>
      <div id="Cart">
        <h1>Cart</h1>
        <Link to="/checkout">
        <Button variant="contained" >Terminar Compra</Button>
        </Link>
      </div>


      <div>
      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h2>nombre: {product.title}</h2>
          <h2>cantidad: {product.quantity}</h2>
          <button onClick={ ()=> removeById(product.id) }>Eliminar</button>
        </div>
      ))}

 <Button onClick={clearCart} variant="contained" >Limpiar Carrito</Button>

    </div>


    </>
  );
};
