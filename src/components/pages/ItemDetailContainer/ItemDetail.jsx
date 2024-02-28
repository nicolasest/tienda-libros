import { ItemCountContainer } from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetail.css";
export const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className="ItemDetailContainer">
        <div className="imageContainer">
          <img src={item.img} alt="" />
        </div>

        <div className={"detailContainer"}>
             
          <h2 className="title">
          {item.title}
          </h2 >
            <h3>Descripcion:</h3>
          <h4 className="description">
            {item.description}
          </h4>
          
          <h2 >
          ${item.price}
          </h2>
          <p>Agregar al carrito</p>
        <ItemCountContainer stock={5}/>
        </div>
      </div>
    </div>
  );
};
