import { NavLink } from "react-router-dom";

function NavBar () {
    return (
     <nav className ="nav">
        <NavLink   to="/">
      <li>Home</li>
        </NavLink>
        <NavLink   to="/carlist">
       <li>carList</li>
        </NavLink>
        <NavLink   to="/newcar">
      <li>NewCar</li>
        </NavLink>
    </nav>
    );
}
export default NavBar;