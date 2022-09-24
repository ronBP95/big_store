import React from 'react';
import { Grid, Paper, Box, Button } from '@mui/material'
import './ShopCard.css'

const ShopCard = (props) => {
    return (
        <Grid item xs={3}>
            <Paper sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                minHeight: 225,
                minWidth: 200
            }}
            elevation={3} 
            square>
                <img className="productImage" alt="" src={props.product.image}></img>
                <Box sx={{
                    textAlign: "center",
                    width: "100%",
                    height: 30,
                    paddingRight: 1,
                    paddingLeft: 1,
                }}>
                    {props.product.title}
                </Box>
                <Box>
                    ${props.product.price}
                </Box>
                <Button sx={{}}>
                    Add to Cart
                </Button>
            </Paper>
        </Grid>
    );
}

export default ShopCard;
