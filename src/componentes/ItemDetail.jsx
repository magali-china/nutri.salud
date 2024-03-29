import { useEffect, useState, useContext} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";



const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect( () => {
        setItemStock(item.stock);
    }, [item]);


    return(
        <div className="row">
            <div className="col-md-4 offset-md-1">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4 offset-md-1">
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>

        </div>
    )
}

export default ItemDetail;