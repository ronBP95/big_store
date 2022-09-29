import React from 'react';
import { Grid, Container, Box, Typography, Paper, Button } from '@mui/material'

const imageStyle = {
    width: "50px",
    height: "50px"
}

const Cart = (props) => {
    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 2, height: "8rem" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: "100%" }}>
                <img style={imageStyle} src={props.cartItem.image}></img>
                <Typography sx={{display: "flex", justifyContent: "center", alignItems: 'center', fontSize: "8pt", width: "50%", marginLeft: 2}}>{props.cartItem.title}</Typography>
                <Box>
                    <Typography>${props.cartItem.price}</Typography>
                    <Button>Remove</Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default Cart;
