import { Item } from "../../common/productCard/Item";

export const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(({ id, img, title, description, price }) => {
        return (
          <Item
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
            id={id}
          />
        );
      })}
    </div>
  );
};
