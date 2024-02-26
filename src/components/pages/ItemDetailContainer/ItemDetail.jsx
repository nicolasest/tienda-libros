import { Item } from "../../common/productCard/Item";

export const ItemDetail = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map(({ id, img, title, description, price }) => {
        return (
          <Item
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};
