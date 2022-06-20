import React from "react"; 
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./componentsContainer/ItemListContainer"

const App = () => {
  return (
    <>
   <Navbar/>
   <ItemListContainer name="Coderhouse" numero="31210"/>
   </>
  )
}

export default App