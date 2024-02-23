import { ItemList } from "./ItemList";
import { products } from "../../../productsMock";
import { useState, useEffect } from "react";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });
    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
