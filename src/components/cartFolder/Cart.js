import React, {useContext} from "react";
import { context } from "../context/CartContextProvider"

const Cart =()=>{

    const {productsCart, removeProducts} = useContext(context);
    
    return(
        <div>
            <h1>Estos son los tiitulos de los productos dentro del carrito</h1>
            {productsCart.map((product, i)=>{
                return  <div key={product.id}>
                            <h4>-{product.title}, cantidad: {product.amount}</h4> 
                            <button onClick={()=> removeProducts(product)}> Eliminar producto</button>
                        </div>
                    })}
        </div>
    )
}

export default Cart