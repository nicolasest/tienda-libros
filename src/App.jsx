import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/NavBar/NavBar.jsx";
import { ItemCountContainer } from "./components/common/ItemCount/ItemCountContainer.jsx";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/common/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>

      {/*   
      <ItemListContainer />
      <ItemDetailContainer />
      <ItemCountContainer stock={7} /> */}
    </>
  );
}

export default App;
