import { CartWidget } from "../../common/CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";
export const NavBar = () => {
  return (
    <>
      <div id="NavBarContainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/Urbanas">Urbanas</Link>
          </li>
          <li>
            <Link to="/category/Deportivas">Deportivas</Link>
          </li>
        </ul>

        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </>
  );
};
