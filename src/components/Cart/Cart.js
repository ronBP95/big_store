import React from 'react';
import { Grid, Container, Box, Typography, Paper } from '@mui/material'

const imageStyle = {
    width: "50px",
    height: "50px"
}

const Cart = (props) => {
    return (
        <Paper sx={{display: 'flex', justifyContent: 'space-evenly', marginTop: 2}}>
            <Box>
                <img style={imageStyle} src={props.cartItem.image}></img>
            </Box>
            <Typography sx={{display: "flex", justifyContent: "center", alignItems: 'center', fontSize: "8pt", width: "50%", marginLeft: 2}}>{props.cartItem.title}</Typography>
            <Typography sx={{marginTop: 2}}>${props.cartItem.price}</Typography>
        </Paper>
    );
}

export default Cart;
