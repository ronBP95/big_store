import { Grid, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from "axios"

// Component Imports
import { ShopCard, ShopNav } from '../components'

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

    let list = products[0]

    return (
        <div>
            <ShopNav />
            <Container sx={{marginY: 5, width: 900}}>
                <Grid container spacing={5}>
                    {products.map((product) => <ShopCard product={product}/>)}
                </Grid>
            </Container>
        </div>
    );
}

export default Shop;
