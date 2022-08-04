import { NavLink } from "react-router-dom";

function NavBar () {
    return (
     <nav className ="nav">
        <NavLink   to="/">
      Home
        </NavLink>
        <NavLink   to="/carlist">
      CarList
        </NavLink>
        <NavLink   to="/newcar">
      NewCar
        </NavLink>
    </nav>
    );
}
export default NavBar;