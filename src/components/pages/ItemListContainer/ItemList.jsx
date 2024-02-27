import { Item } from "../../common/productCard/Item";
import "./ItemList.css"
export const ItemList = ({ products }) => {
  return (
    <div className="itemListContainer">
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
