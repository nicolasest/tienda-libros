import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import "./cart.css";
export const Cart = () => {
  const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice()
  return (
    <>


      <div className="product">
      {cart.map((product) => (
        <div key={product.id} className="productDetail" >
         <div className="productDetailText"> <h2>Nombre: {product.title}</h2>
          <h2>Cantidad: {product.quantity}</h2></div>
          <img src={product.img} alt="imagen del producto"  className="img" />
          <Button onClick={()=> removeById(product.id) } variant="contained" className="buttonDlete" >Eliminar</Button>

        </div>
      ))}
      <h3>El total de la compra es: ${total}</h3>
      <div id="Cart">
      
        <Link to="/checkout">
        <Button variant="contained" >Terminar Compra</Button>
        </Link>
 <Button onClick={clearCart} variant="contained" >Limpiar Carrito</Button>
      </div>


    </div>


    </>
  );
};
