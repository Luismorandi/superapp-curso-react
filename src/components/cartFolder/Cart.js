import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { context } from "../context/CartContextProvider"
import "./cart.css"

const Cart =()=>{

    const {productsCart, removeProducts} = useContext(context);
    const total = productsCart.reduce(function(count,object){
      return count + (object.price * object.amount) 
    },0)

    return(
<>
        {productsCart.length ===0 
        ?
        <Link to="/">  <h1 className="sectionCenterCart">¡No hay productos! Vuelve a tus compras</h1> </Link>
        :
        <div className="sectionCenterCart" >
            <table>
                <tr id="colorHeader"> 
                    <th >Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                <br />
                
                    {productsCart.map((product, i)=>{
                        return  <tr key={product.id}>
                            <div>
                                    <td> <img src={product.image} alt="" /></td>
                                    <td> {product.title}</td>
                            </div>
                                    <td className="alignText">{product.amount}</td> 
                                    <td className="alignText">${product.price}</td>
                                    <td className="alignText" title="Eliminar producto"><button onClick={()=>removeProducts(product)}> X</button></td>
                                </tr>
                        })}
                        <hr />
                <tr className="">
                    <td> <h2> Total </h2></td>
                    <td></td>
                    <td> <h2> ${total.toFixed(2)} </h2></td>
                </tr>
            </table>
        </div>
        }
</>
    )
}

export default Cart