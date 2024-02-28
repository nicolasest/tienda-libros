import { CartWidget } from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";
export const NavBar = () => {
  return (
    <>
      <div id="NavBarContainer">
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/category/Ficcion">Ficción</Link>
          </li>
          <li>
            <Link className="link" to="/category/Romance">Romance</Link>
          </li>
        </ul>

        <Link className="link" to="/cart">
          <CartWidget />
        </Link>
      </div>
    </>
  );
}; 
