import React from "react";
import Menu from "../navBarFolder/Menu";
import Cart from "../navBarFolder/Cart";
import "../navBarFolder/navbar.css"
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