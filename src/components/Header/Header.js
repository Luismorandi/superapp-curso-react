import React from "react";
import Navbar from "./componentsHeader/navbar";
import Cart from "./componentsHeader/Cart";
import "../Header/header.css"


const Header = () => {
    return (
        <header>
            <img src="" alt="" />
            <h1>Hola soy el header</h1>
            <Navbar/>
            <Cart/>
            

        </header>
    
    )
}

export default Header