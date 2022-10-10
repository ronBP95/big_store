import * as React from 'react';
import { Grid, Paper, Box, Button } from '@mui/material'
import './ShopCard.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { navigate } from 'gatsby';

const ShopCard = (props) => {

    let token = localStorage.getItem('token')

    const [itemInfo] = React.useState({
        id: props.product.id,
        title: props.product.title,
        price: props.product.price,
        image: props.product.image,
    })

    const handleCartAdd = async (e) => {
        e.preventDefault();
        await axios({
            method: "post",
            url: "https://big-store-backend.glitch.me/api/users/add",
            data: itemInfo,
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(function (res) {
            toast.success("Item Added to Cart", {
                toastId: "cart"
            })
        })
        .catch(function (res) {
            toast.error("You need to login or your cart is full")
        })
        console.log(itemInfo)
    } 


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
                <Button onClick={handleCartAdd}>
                    Add to Cart
                </Button>
            </Paper>
        </Grid>
    );
}

export default ShopCard;
