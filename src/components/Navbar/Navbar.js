import React from "react";
import Menu from "./navbarComponents/Menu";
import Cart from "./navbarComponents/Cart";
import "./navbar.css"
import logo from "../../assets/logo.png";

   



const Navbar = () => {
    return (
        <header>
            <img  src={logo} alt="" id="logo"/>
            <Menu/>
            <Cart/>
            
        </header>
    
    )
}

export default Navbar