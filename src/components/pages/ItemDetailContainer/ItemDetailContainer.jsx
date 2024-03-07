import { useEffect, useState } from "react";
import { getProduct } from "../../../asyncMock";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      quantiy: cantidad
    }
    
    console.log(infoProducto)

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
