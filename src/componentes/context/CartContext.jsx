import { createContext } from "react";
import { useState, useEffect } from "react"; 
import Swal from "sweetalert2";


export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            let pos= cart.findIndex(x => x.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        }else{
            setCart ([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id);
        setCart([...products]);
    }

    const clear = () =>{
        setCart ([]);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0);
    }
    const subTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.precio, 0);
    }

    useEffect(() => {
        mostrarAlerta();
    },[])

    const mostrarAlerta = () =>{
        Swal.fire({
            title: 'Estas seguro de eliminar los productos?',
            text: "Elige una opcion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
            
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado',
                    'Tus productos ya no estan en el carrito!',
                    'success',
                    )
                }
            })          
    }

    return(
        <CartContext.Provider value = {{cart, addItem, removeItem, clear, cartTotal, subTotal, mostrarAlerta}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;