import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div style={{fontSize:"2rem"}}>
            <FontAwesomeIcon icon={faCartShopping} /> 0
        </div>
    );
}

export default CartWidget;