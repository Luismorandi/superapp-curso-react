import "../itemListFolder/itemCount.css"
const Item = ({name, price, stock }) => {

    return(

        <div className="countCard2" >
        
        <div className="countCard">
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>
        <div>
            <h4>Quedan {stock}</h4>
        </div>
        <div className="countCard3" >
            <button  > Ver detalles de producto</button>
        </div>
    </div>
        

    )
}

export default Item