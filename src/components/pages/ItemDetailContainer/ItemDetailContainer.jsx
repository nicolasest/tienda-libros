import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../../asyncMock";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { db } from "../../../firebaseConfig";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CartContext } from "../../../context/CartContext";

import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

const {addToCart, getTotalQuantityById} = useContext( CartContext )

const initial = getTotalQuantityById(+id)
const navigate = useNavigate()


  useEffect(() => {
    setIsLoading(true)

    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id )
    getDoc( refDoc ).then(res => {
      setItem( {...res.data(), id: res.id} )
    }).finally(()=> setIsLoading(false))

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
        <ItemDetail item={item} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};
