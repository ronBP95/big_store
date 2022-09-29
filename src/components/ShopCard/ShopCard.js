import * as React from 'react';
import { Grid, Paper, Box, Button } from '@mui/material'
import './ShopCard.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { navigate } from 'gatsby';

const ShopCard = (props) => {

    const [itemInfo] = React.useState({
        id: props.product.id,
        title: props.product.title,
        price: props.product.price,
        image: props.product.image,
    })

    const handleCartAdd = async (e) => {
        if (props.isAuth) {
            e.preventDefault();
            await axios({
                method: "post",
                url: "http://localhost:4000/api/users/add",
                data: itemInfo,
            })
            .then(function (res) {
                toast.success("Item Added to Cart", {
                    toastId: "cart"
                })
            })
            .catch(function (res) {
                toast("Cart is full or something went wrong")
            })
            console.log(itemInfo)
        } else {
            navigate('/login')
        }
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
