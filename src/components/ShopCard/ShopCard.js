import * as React from 'react';
import { Grid, Paper, Box, Button } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-toastify';

// Font Imports
import '../../pages/index.css'

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
                toastId: "cart",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        })
        .catch(function (res) {
            toast.error("You need to login or your cart is full", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            })
        })
        console.log(itemInfo)
    } 

    const imageStyle = {
        width: "150px",
        height: "150px",
        padding: "20px"
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100%",
                minHeight: 235,
                minWidth: 200
            }}
            elevation={3} 
            square>
                <img className="productImage" alt="" src={props.product.image} style={imageStyle}></img>
                <Box sx={{
                    textAlign: "center",
                    width: "100%",
                    height: 40,
                    fontSize: "100%",
                    paddingTop: 2,
                    flex: 1,
                    borderTop: "1px solid #EBEBFB",
                    fontFamily: "Open Sans"
                }}>
                    {props.product.title}
                </Box>
                <Box sx={{display:"flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingLeft: 2, marginTop: 1, fontSize: "16pt"}}>
                    ${Number.parseFloat(props.product.price).toFixed(2)}
                    <Button onClick={handleCartAdd} sx={{marginRight: 1, color: "#ff3366"}}>
                        Add to Cart
                    </Button>
                </Box>
            </Paper>
        </Grid>
    );
}

export default ShopCard;
