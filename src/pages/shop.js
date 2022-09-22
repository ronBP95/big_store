import { Grid, Container } from '@mui/material';
import React from 'react';
import ShopCard from '../components/ShopCard/ShopCard'

const Shop = () => {
    return (
        <Container sx={{marginY: 5, width: 900}}>
            <Grid container spacing={5}>
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
            </Grid>
        </Container>
    );
}

export default Shop;
