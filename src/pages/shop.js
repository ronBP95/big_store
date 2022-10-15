import { Grid, Container, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from "axios"
import { ToastContainer } from 'react-toastify';

// Component Imports
import { ShopCard, Nav } from '../components'

// Font Imports
import "./index.css"

const Shop = () => {

    const [products, setProducts] = useState([]);

    console.log(products)

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                setProducts(response.data)
            })
    }

    useEffect(() => {
        try {
            getProducts();
        } catch (error) {
            console.error();
        }
    }, []);

    // let token = localStorage.getItem('token')
    // const [isAuth, setIsAuth] = useState(false)

    // useEffect(() => {
    //     if (token !== null) {
    //         setIsAuth(true)
    //     } else if (token === null) {
    //         setIsAuth(false)
    //     }
    // })

    // console.log(localStorage)
    return (
        <div>
            <Nav />
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                {/* <Box>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", width: "15vw", background: "#9A968F", color: "white", fontFamily: "Inter"}}>Filter</Box>
                </Box> */}
                <Box sx={{width: "80%", margin: 3}}>
                    <Grid container spacing={5}>
                        {products.map((product, index) => <ShopCard product={product} key={index} listId={index} />)}
                    </Grid>
                    <ToastContainer />
                </Box>
            </Box>
        </div>
    );
}

export default Shop;
