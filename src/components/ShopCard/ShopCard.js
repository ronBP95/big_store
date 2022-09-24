import React from 'react';
import { Grid, Paper, Box } from '@mui/material'
import './ShopCard.css'

const ShopCard = (props) => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} square>
                <img className="productImage" alt="" src={props.product.image}></img>
                <Box>
                    Title :{props.product.title}
                </Box>
                <Box>
                    Price :{props.product.price}
                </Box>
            </Paper>
        </Grid>
    );
}

export default ShopCard;
