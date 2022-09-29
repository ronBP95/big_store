import { Grid, Container, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from "axios"
import { ToastContainer } from 'react-toastify';

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

    let token = localStorage.getItem('token')
    const [isAuth, setIsAuth] = useState(false)
    
    useEffect(() => {
        if (token !== null) {
            setIsAuth(true)
        } else if (token === null) {
            setIsAuth(false)
        }
    })

    console.log(localStorage)
    return (
        <div>
            <Nav />
            <Container maxWidth="xl" sx={{marginY: 5}}>
                <Grid container spacing={5}>
                    {products.map((product, index) => <ShopCard product={product} key={index} listId={index}/>)}
                </Grid>
            <ToastContainer />
            </Container>
        </div>
    );
}

export default Shop;
