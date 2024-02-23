import { CartWidget } from "../../common/CartWidget"


import './NavBar.css'
export const NavBar = () => {
  return (
    < >
    <div id='NavBarContainer'>
      <ul>
      <li>Hombre</li>
      <li>Mujer</li>
      <li>Fitness</li>
      </ul>
      <CartWidget />
    </div>
  
 
    </>
  )
}
