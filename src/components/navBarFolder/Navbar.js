import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import "../navBarFolder/navbar.css";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { context } from "../context/CartContextProvider";

const categories = [
  { name: "Electronica", id: 0, route: "/category/Electronica" },
  { name: "Joyas", id: 1, route: "/category/Joyas" },
  { name: "Hombre", id: 2, route: "/category/Hombre" },
  { name: "Mujer", id: 3, route: "/category/Mujer" },
];

const Navbar = () => {
  const { quantityProducts, productsCart } = useContext(context);

  const quantity = quantityProducts(productsCart);
  

  return (
    <header className="header-navbar">
      <Link to="/" className="logo-navbar">
        <img src={logo} alt="" id="logo" />{" "}
      </Link>
      <div>
        <label htmlFor="check">
          <MenuIcon > </MenuIcon>
        </label>
        <input type="checkbox" id="check" />
        <ul className="submenu-navbar">
          <li  id="home">
            <NavLink to="/" className="link-navbar">
              Home
            </NavLink>
          </li>

          {categories.map((category) => (
            <li className="" key={category.id}>
              <NavLink className="link-navbar" to={category.route}>
                {" "}
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/cart">
        <div className="iconQuantity-navbar">
          <CartWidget  />
          <h5 className={quantity === 0 ? "iconQuantity-navbar-none" : ""}>
            {quantity}
          </h5>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;