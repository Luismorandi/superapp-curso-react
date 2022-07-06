
import React, {useState} from "react";
import "../navBarFolder/cart.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "../itemListFolder/itemCount.css"

const ItemCount = ({stock, initial}) =>{


    const [count, setCount] = useState (initial)




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
            <div className="countCardCount">
                <RemoveIcon onClick={removeCountClick}/>
                <p>{count}</p>
                <AddIcon onClick={addCountClick}/> 
            </div>

        
    )
}

export default ItemCount