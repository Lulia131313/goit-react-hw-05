import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = ({ isActive }) => {
    return clsx(isActive && "active", "link");
  };
  return (
    <header className="navbar">
      <ul>
        <NavLink className={activeStyle} to="/">
          Home
        </NavLink>
        <NavLink className={activeStyle} to="/movies">
          Movies
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;
