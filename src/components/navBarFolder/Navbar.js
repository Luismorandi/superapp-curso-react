import React from "react";
import CartWidget from "./CartWidget";
import "../navBarFolder/navbar.css"
import logo from "../../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";

const categories = [
    {name: "Electronica", id:0, route:"/category/electronics"},
    {name: "Joyas", id:1, route:"/category/jewelery"},
    {name: "Hombre", id:2, route:"/category/men's clothing"},
    {name: "Mujer", id:3, route:"/category/women's clothing"}
]


const Navbar = () => {  
    return (
        <header className="headerNavBar">
            <Link to="/" className="logoNavBar"><img  src={logo} alt="" id="logo"/>  </Link>
            <div>
            <label htmlFor="check"><MenuIcon id="menuIcon"> </MenuIcon></label>
            <input type="checkbox" id="check"/>
            <ul className="subMenu">
                {categories.map((category)=> <li className="colorLinks" key={category.id}><Link  to={category.route}> {category.name}</Link></li>)}
            </ul>
        </div>    
            <CartWidget/>           
        </header>
    )
}

export default Navbar