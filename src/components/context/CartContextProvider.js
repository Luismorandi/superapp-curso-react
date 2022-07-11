import React, {createContext, useState} from "react";

export const context = createContext();
const {Provider} =  context;
 
const CartContextProvider = ({children}) => {

    const [productsCart, setProductsCart] = useState([])

    const checkProducts = (id) =>{
            let result = productsCart.find((objeto) =>    id === objeto.id);
            return result;
        
     }
     
     
     const addProductsCart = (product) =>{
         if (checkProducts(product.id) === undefined){
         product.cantidad=1
         setProductsCart([...productsCart, product])
         }
     
         else{
            prod
            console.log(product.cantidad)
        
         }
     }
     
     
     const removeProducts = (product) =>{
     
     let id = product.id 
     let newProductsCart = productsCart.find((objeto) =>    id !== objeto.id);
     setProductsCart(newProductsCart)
         
     }
     
     const quantityProducts = () => {
        let result= productsCart.length
        return result
     }
     

    return(
        <Provider value={{productsCart, addProductsCart, removeProducts, quantityProducts}}>
            {children} 
        </Provider>
    )
}

export default CartContextProvider