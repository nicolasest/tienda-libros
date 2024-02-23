export const Item = ({ img, title, description, price }) => {
  return (
    <div style={{ border: "1px solid black", width: "200px" }}>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <img src={img} alt={title} style={{ width: "200px" }} />
    </div>
  );
};
