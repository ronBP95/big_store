import React from 'react';
import { Grid, Paper, Box } from '@mui/material'

const ShopCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} square>
                "Image Goes here"
                <Box>
                    Item Title
                </Box>
                <Box>
                    Price
                </Box>
            </Paper>
        </Grid>
    );
}

export default ShopCard;
