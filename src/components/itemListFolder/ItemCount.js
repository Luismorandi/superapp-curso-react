
import React, {useState} from "react";
import "../navBarFolder/cart.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "../itemListFolder/itemCount.css"

const ItemCount = ({stock, initial}) =>{

    const [count, setCount] = useState (initial)



    const addCartButton = () =>{
        let copyCount = count
        console.log(copyCount)
    }

    const addCountClick =() => {
        if (count < stock ){
            setCount(count + 1);
        }
    }

    const removeCountClick =() => {
        if (count > 1 ){
            setCount(count - 1);
        }
    }

    return (
        <div className="countCard2" >
            <div className="countCard">
                <RemoveIcon onClick={removeCountClick}/>
                <p>{count}</p>
                <AddIcon onClick={addCountClick}/> 
            </div>
            <div className="countCard3" >
                <button onClick={addCartButton} > Agregar al Carrito</button>
            </div>
        </div>
        
    )
}

export default ItemCount