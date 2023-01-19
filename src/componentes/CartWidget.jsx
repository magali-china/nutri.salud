import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './context/CartContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <Link to={"/cart"} type="button" className="btn btn-warning position-relative" style={{fontSize:"1.5rem"}}>
            <FontAwesomeIcon icon={faCartShopping}  /> {cartTotal()}
        </Link>

    );
}

export default CartWidget;