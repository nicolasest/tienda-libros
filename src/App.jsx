import "./App.css";

import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/NavBar/NavBar.jsx";
import { ItemCountContainer } from "./components/common/ItemCount/ItemCountContainer.jsx";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCountContainer stock={7} />
    </>
  );
}

export default App;
