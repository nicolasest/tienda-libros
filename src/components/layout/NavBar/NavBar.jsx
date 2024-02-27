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
            <Link className="link" to="/category/Urbanas">Urbanas</Link>
          </li>
          <li>
            <Link className="link" to="/category/Deportivas">Deportivas</Link>
          </li>
        </ul>

        <Link className="link" to="/cart">
          <CartWidget />
        </Link>
      </div>
    </>
  );
}; 
