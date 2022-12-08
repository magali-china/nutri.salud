import React from "react";

const ItemDetail = ({item}) => {
    return(
        <div className="row">
            <div className="col-md-4 offset-md-1">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4 offset-md-1">
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
            </div>

        </div>
    )
}

export default ItemDetail;