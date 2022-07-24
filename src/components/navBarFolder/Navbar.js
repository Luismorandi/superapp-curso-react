import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import "../navBarFolder/navbar.css";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
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
    <header className="headerNavBar">
      <Link to="/" className="logoNavBar">
        <img src={logo} alt="" id="logo" />{" "}
      </Link>
      <div>
        <label htmlFor="check">
          <MenuIcon id="menuIcon"> </MenuIcon>
        </label>
        <input type="checkbox" id="check" />
        <ul className="subMenu">
          {categories.map((category) => (
            <li className="colorLinks" key={category.id}>
              <Link className="aNav" to={category.route}>
                {" "}
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/cart">
        <div className="iconQuantityFlex ">
          <CartWidget className="cartWidget" />
          <h5 className={quantity === 0 ? "iconQuantityNone" : ""}>
            {quantity}
          </h5>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
