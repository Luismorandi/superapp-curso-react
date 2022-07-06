import React from "react";
import Cart from "../navBarFolder/Cart";
import "../navBarFolder/navbar.css"
import logo from "../../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";


const categories = [
    {name: "Electronics", id:0, route:"/category/electronics"},
    {name: "Jewelery", id:1, route:"/category/jewelery"},
    {name: "Men`s clothing", id:2, route:"/category/men's clothing"},
    {name: "Women`s clothing", id:3, route:"/category/women's clothing"}
]




const Navbar = () => {
    
    return (
        <header>
            <Link to="/" className="hola"><img  src={logo} alt="" id="logo"/>  </Link>
            <div>
            <label htmlFor="check"><MenuIcon id="menuIcon"> </MenuIcon></label>
            <input type="checkbox" id="check"/>
            <ul className="submenu">
                {categories.map((category)=> <li className="colorLinks"><Link key={category.id} to={category.route}> {category.name}</Link></li>)}
            </ul>
        </div>    
            <Cart/>
            
        </header>
    
    )
}

export default Navbar