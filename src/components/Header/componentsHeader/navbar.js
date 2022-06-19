import React from "react"
import "../componentsHeader/navbar.css"
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () =>{
    return (
        <div>
            <label for="check"><MenuIcon id="menuIcon"> </MenuIcon></label>
            <input type="checkbox" id="check"/>
            <ul className="submenu2">
                <li><a href="">Categoria 1</a></li>
                <li><a href="">Categoria 2</a></li>
                <li><a href="">Categoria 3</a></li>
                <li><a href="">Categoria 4</a></li>

        </ul>
        </div>    
        )
    
}

export default Navbar