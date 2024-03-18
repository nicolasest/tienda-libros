import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../../asyncMock";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

const {addToCart} = useContext( CartContext )


const navigate = useNavigate()


  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad
    }
    
    addToCart(infoProducto)

/* navigate("/cart") */
  };

  return (
    <>
      {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent:'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} />
      )}
    </>
  );
};
