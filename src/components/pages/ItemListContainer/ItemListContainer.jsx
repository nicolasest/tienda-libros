import { getProducts } from "../../../asyncMock";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => console.log(res));
  }, []);

  return (
    <>
      <ItemList products={products} />
      <h1>hola</h1>
    </>
  );
};
