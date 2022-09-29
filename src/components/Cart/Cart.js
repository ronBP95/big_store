import React from 'react';
import { Grid, Container, Box, Typography, Paper } from '@mui/material'

const Cart = (props) => {
    return (
        <Paper sx={{marginTop: 2}}>
            <Typography>{props.cartItem.title}</Typography>
        </Paper>
    );
}

export default Cart;
