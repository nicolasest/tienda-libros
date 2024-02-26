const products = [
  {
    id: 1,
    title: "zapatilla Blanca",
    price: 100,
    description: "Muy buenas",
    img: "https://res.cloudinary.com/dujzgidzo/image/upload/v1708716273/cld-sample-5.jpg",
    stock: 12,
    category: "Urbanas",
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    description: "Mas comodas",
    img: "https://res.cloudinary.com/dujzgidzo/image/upload/v1708716262/samples/shoe.jpg",
    stock: 12,
    category: "Deportivas",
  },
  {
    id: 3,
    title: "Product 3",
    price: 300,
    description: "lindas",
    img: "https://res.cloudinary.com/dujzgidzo/image/upload/v1708716237/samples/ecommerce/shoes.png",
    stock: 12,
    category: "Urbanas",
  },
  {
    id: 4,
    title: "Product 4",
    price: 400,
    description: "feas",
    img: "https://res.cloudinary.com/dujzgidzo/image/upload/v1708716272/cld-sample-3.jpg",
    stock: 12,
    category: "Deportivas",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};