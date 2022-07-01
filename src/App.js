import React from "react"; 
import Navbar from "./components/navBarFolder/Navbar"
import ItemListContainer from "./components/itemListFolder/ItemListContainer"
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


const App = () => {

  
  return (
    <>
   <Navbar/>
   <ItemListContainer />
   <ItemDetailContainer/>

   </>
  )
}

export default App