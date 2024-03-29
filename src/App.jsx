import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/NavBar/NavBar.jsx";
import { ItemCountContainer } from "./components/common/ItemCount/ItemCountContainer.jsx";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/common/cart/Cart";
import { Layout } from "./components/layout/Layout.jsx";
import { CheckOutContainer } from "./components/pages/checkOut/CheckOutContainer.jsx";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
       <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/checkout" element={<CheckOutContainer />} />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Route>
        </Routes>
        </CartContextProvider>
      </BrowserRouter>


    </>
  );
}

export default App;
