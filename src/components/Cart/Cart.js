import React from 'react';
import { Grid, Container } from '@mui/material'

const Cart = (props) => {
    return (
        <div>
            Id: {props.cartItem.test} 
            +
            Test: {props.cartItem.test}
        </div>
    );
}

export default Cart;
