import "./ItemDetail.css";
export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <div className="ItemDetailContainer">
        <div className="imageContainer">
          <img src={item.img} alt="" />
        </div>

        <div className={"detailContainer"}>
          <h2>
            <span >Nombre:</span> {item.title}
          </h2>
          <h2 >
            <span >Descripcion:</span>{" "}
            {item.description}
          </h2>
          <h2 >
            <span >Precio:</span> ${item.price}
          </h2>
        </div>
      </div>
    </div>
  );
};
