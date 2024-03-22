import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems()

  return (
   

      <Badge badgeContent={total} showZero color="primary">
        <BsFillCartCheckFill size="30px" color="beige" />
      </Badge>
    
   
  );
};

export default CartWidget;
