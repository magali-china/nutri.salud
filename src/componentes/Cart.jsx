import { CartContext } from "./context/CartContext";
import { useContext,} from "react";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { useEffect } from "react";

const Cart = () => {
    const {cart, cartTotal, subTotal, clear, mostrarAlerta } = useContext(CartContext);
    
    if (cartTotal () === 0 ) {
        return(
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <div className="alert alert-danger text-center" role="alert">No se encontraron productos en el Carrito!</div>
                    </div>
                </div>
        </div>
        )
    }

    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={6} className="text-end"><Link onClick={clear} className="btn btn-warning">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* {() => {removeItem(item.id)} */}
                           {cart.map(item => (
                                        <tr key={item.id}>
                                            <td><img src={item.imagen} alt={item.nombre} width={80}/></td>
                                            <td className="align-middle">{item.nombre}</td>
                                            <td className="align-middle ">{item.quantity}</td>
                                            <td className="align-middle">${item.precio}</td>
                                            <td className="align-middle">${item.quantity * item.precio}</td>
                                            <td className="align-middle text-end"><Link onClick={mostrarAlerta} ><img src={"/img/cestobasura.png"} alt={"Eliminar producto"} width={32}/></Link></td>             
                                        </tr>
                                    )
                                )
                            }
                           <tr>
                                <td colSpan={3}>&nbsp;</td>
                                <td className="fw-bolder text-decoration-underline "> Total a pagar</td>
                                <td className="fw-semibold">${subTotal()}</td>
                                <td className="text-end"><button className="btn btn-warning">Finalizar compra</button></td>
                           </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
    
}

export default Cart;