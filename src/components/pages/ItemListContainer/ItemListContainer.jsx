
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { db } from "../../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore"

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
/*    
let productsCollection = collection(db, "products")
getDocs(productsCollection).then(res => {
 let arrayNuevo = res.docs.map((elemento) =>{
    return {...elemento.data(), id: elemento.id}
  })
setProducts(arrayNuevo)
}).finally(()=> setLoading(false)) */

let productsCollection = collection(db, "products");

let consulta = productsCollection ; 
if (category) {
  let productsCollectionFiltered = query(
    productsCollection,
    where("category", "==", category)
  );
  consulta = productsCollectionFiltered;
}

getDocs(consulta)
  .then((res) => {
    let arrayLindo = res.docs.map((elemento) => {
      return { ...elemento.data(), id: elemento.id };
    });

    setProducts(arrayLindo);
  })
  .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
