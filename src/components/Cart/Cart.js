import * as React from 'react';
import { Grid, Container, Box, Typography, Paper, Button } from '@mui/material'
import { toast } from 'react-toastify'
import axios from 'axios'

const imageStyle = {
    width: "50px",
    height: "50px"
}

const Cart = (props) => {

let token = localStorage.getItem('token')
const [remove, setRemove] = React.useState({
    id: props.cartItem.id,
})

const handleRemove = async () => {
console.log('Checking key', props.number)
console.log('All props: ', props.cartItem)
await axios({
    method: "post",
    url: "https://big-store-backend.glitch.me/api/users/remove",
    data: remove,
    headers: {
    Authorization: 'Bearer ' + token
    }
})
.then(res => {
    console.log(res.data)
    toast.success("Item Removed",{
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: "false",
        progress: undefined,
        theme: "colored"
    })
})
.catch(function (res) {
    console.log(res.data)
    toast.error("Invalid Request", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: "false",
        progress: undefined,
        theme: "colored"
    })
})
};

    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 2, height: "8rem" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: "100%" }}>
                <img style={imageStyle} src={props.cartItem.image}></img>
                <Typography sx={{display: "flex", justifyContent: "center", alignItems: 'center', fontSize: "8pt", width: "50%", marginLeft: 2}}>{props.cartItem.title}</Typography>
                <Box>
                    <Typography>${Number.parseFloat(props.cartItem.price).toFixed(2)}</Typography>
                    <Button onClick={handleRemove}>Remove</Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default Cart;
