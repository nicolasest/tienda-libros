import { getProducts } from "../../../asyncMock";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    getProducts().then((res) => {
      if (category) {
        const productsFiltered = res.filter(
          (product) => product.category === category
        );
        setProducts(productsFiltered);
      } else {
        setProducts(res);
      }
      setLoading(false);
    });
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
