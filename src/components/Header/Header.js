import React from "react";
import Navbar from "./componentsHeader/navbar";
import Cart from "./componentsHeader/Cart";
import "../Header/header.css"
import logo from "../../assets/logo.png";

   



const Header = () => {
    return (
        <header>
            <img  src={logo} alt="" id="logo"/>
            <Navbar/>
            <Cart/>
            
        </header>
    
    )
}

export default Header