import React from 'react';
import { Grid, Paper, Box } from '@mui/material'

const ShopCard = (props) => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} square>
                Image :{props.product.image}
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
