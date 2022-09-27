import { Grid, Container, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from "axios"

// Component Imports
import { ShopCard, Nav } from '../components'

const Shop = () => {

    const [products, setProducts] = useState([]);

    console.log(products)

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products?limit=4')
        .then(function (response) {
            setProducts(response.data)
        })
    }

    useEffect(() => {
        try {
            getProducts();
        } catch(error) {
            console.error();
        }
    }, []);

    return (
        <div>
            <Nav />
            <Container maxWidth="xl" sx={{marginY: 5}}>
                <Grid container spacing={5}>
                    {products.map((product) => <ShopCard product={product}/>)}
                </Grid>
            </Container>
        </div>
    );
}

export default Shop;
