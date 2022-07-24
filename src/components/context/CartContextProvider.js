import React, {createContext,  useState} from "react";

export const context = createContext();                                                                              
const {Provider} =  context;                                  
            
const CartContextProvider = ({children}) => {
    
    const [productsCart, setProductsCart] = useState([])
    const [totalCart, setTotalCart] = useState()

    const total = (array) => {

        array.reduce(function(count,object){
            const total=  count + (object.price * object.amount)
            setTotalCart(total) 
          },0)

    }
    
    const removeAllProducts = () =>{
        setProductsCart([])
    }
    const checkProducts = (id) =>{
            let result = productsCart.find((objeto) =>    id === objeto.id);
            return result;    
     }
     
     
    const addProductsCart = (product, count) =>{
         if (checkProducts(product.id) === undefined){                                                                                          
            product.amount= count
            setProductsCart([...productsCart, product])
            }
     
         else{
            let copyProducts = productsCart
            let index = copyProducts.findIndex(objeto=> product.id === objeto.id);
            copyProducts[index].amount += count
            setProductsCart(copyProducts);
         }
     }
     
     
    const removeProducts = (product) =>{
         let copyProducts= []
         let id = product.id 
         productsCart.map(function(objeto){
           if(id !== objeto.id){
            copyProducts.push(objeto)}
            });
        setProductsCart(copyProducts) 
     }

    const quantityProducts = (products) => {
        let result= products.length
        return result
     }
     

    return(
        <Provider value={{productsCart, addProductsCart, removeProducts, quantityProducts, total, removeAllProducts}}>
            {children} 
        </Provider>
    )
}

export default CartContextProvider