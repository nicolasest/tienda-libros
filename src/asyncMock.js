const products = [
  {
    id: 1,
    title: "Inmersión Cuántica",
    price: 9500,
    description: "Realidad virtual desafiante y dimensiones alternativas.",
    img: "https://img.freepik.com/foto-gratis/libro-superficie-madera_23-2147662318.jpg?t=st=1709133880~exp=1709137480~hmac=cc8c104528fd21890ee2be22238095da5ba38694de372af6b85100859d962898&w=740",
    stock: 12,
    category: "Ficcion",
  },
  {
    id: 2,
    title: "Bajo el Cielo de París",
    price: 10200,
    description: "Romance bohemio en los callejones parisinos.",
    img: "https://img.freepik.com/foto-gratis/libro-papel-fisico-sobre-primer-plano-fondo_58702-6774.jpg?w=740&t=st=1709134073~exp=1709134673~hmac=7820d6d466eb991c4c313855df75e1609d44e2b84ba069666f13690b8abb4909",
    stock: 12,
    category: "Romance",
  },
  {
    id: 3,
    title: "El Último Viaje Estelar",
    price: 8300,
    description: "Odisea cósmica en busca de un nuevo hogar.",
    img: "https://img.freepik.com/foto-gratis/libro-papel-fisico-sobre-primer-plano-fondo_58702-6829.jpg?t=st=1709146028~exp=1709146628~hmac=96b4bd756b947b09657ca0233f347b573ed8907b0a5b201737af33f5553f77de",
    stock: 12,
    category: "Ficcion",
  },
  {
    id: 4,
    title: "Destinos Entrelazados",
    price: 7400,
    description: "Encuentros fortuitos revelan el poder del destino y el amor.",
    img: "https://img.freepik.com/foto-gratis/libro-papel-fisico-sobre-primer-plano-fondo_58702-6763.jpg?t=st=1709146028~exp=1709146628~hmac=c0e41caa0646f31c70398e4657b2f41f132a577e3dcdcebab2a6b31b6f9c262d",
    stock: 12,
    category: "Romance",
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
