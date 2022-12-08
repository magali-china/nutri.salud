import React, {useState} from "react";

const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

    const restarStock = () => {
        if (counter > 1){
            setCounter(counter - 1);
        }
    }

    const sumarStock = () => {
        if (counter < stock){
            setCounter ( counter + 1);
        }
    }

    const onAdd = () => {
        if (stock > 0){
            console.log("Agregaste: " + counter + " Productos al carrito!")
        }
    }

    return(
        <div>
            <div className="row">
                <div className="col-md-3 mg" >
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={sumarStock}>+</button>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-2">
                    <button type="button" className="btn btn-outline-primary fw-bold" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;