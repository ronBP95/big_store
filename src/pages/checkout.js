import * as React from 'react';
import { Container, Box, Typography, Button, Paper } from '@mui/material';
import CheckoutNav from '../components/CheckoutNav/CheckoutNav'
import axios from 'axios'

// Component Imports
import OrderSummary from '../components/OrderSummary/OrderSummary';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';

// SendGrid Imports

const Checkout = () => {

  const [cart, setCart] = React.useState([])
  const [total, setTotal] = React.useState([])

  const getCart = () => {
    const token = localStorage.getItem('token')
    axios.get('https://big-store-backend.glitch.me/api/users/cart', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(function (response) {
      let filter = response.data.cart
      console.log("Filter", filter)
      setCart(filter.map((cartItem, index) => <OrderSummary cartItem={cartItem} key={index} number={index} />))
      let prices = filter.map((cartItem) => cartItem.price)
      const initialValue = 0;
      const sum = prices.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
      setTotal(Math.round(sum * 100) / 100)
    })
  }

  React.useEffect(() => {
    getCart();
  }, []);

  const checkout = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    await axios({
      method: "post",
      url: "https://big-store-backend.glitch.me/api/users/checkout",
      headers: {
          Authorization: 'Bearer ' + token
      }
    })
    .then(function (response) {
      console.log(response)
      navigate('/profile')
      toast.success("Order Placed Successfully. Thank you for shopping with us!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        })
    })
    .catch(function (res) {
      console.log(res)
      toast("Checkout Failed. Something went wrong..")
    })
  }

  return (
    <Box>
      <CheckoutNav />
      <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: 10, flexGrow: 1}}>
        <Box sx={{display: "flex", flexDirection: "column", width: {xs: "100%", sm: "85%", md: "55%"}, border: "1px solid #eeeeee", marginTop: 10}}>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Typography sx={{marginTop: 2, marginBottom: 1, fontFamily: "Inter", fontWeight: 700}}>Checkout</Typography>
          </Box>
          <Box>
            <Typography sx={{padding: 2, fontFamily: "Inter", fontWeight: 700}}>Order Summary</Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 2, paddingRight: 3}}>
              <Box sx={{display:"flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
                <Typography sx={{fontFamily: "Inter", fontWeight: 700}}>Products</Typography>
                <Typography sx={{fontFamily: "Open Sans", fontSize: "11pt"}}>{cart}</Typography>
              </Box>
              <Box sx={{display:"flex", justifyContent: "space-between", width: "100%" }}>
                <Typography sx={{fontFamily: "Inter", fontWeight: 700}}>Shipping</Typography>
                <Typography sx={{fontFamily: "Inter", fontWeight: 700}}>Free</Typography>
              </Box>
              <Box sx={{display:"flex", justifyContent: "space-between", width: "100%" }}>
                <Typography sx={{fontFamily: "Inter", fontWeight: 700}}>Total</Typography>
                <Typography sx={{fontFamily: "Inter", fontWeight: 700}}>{total}</Typography>
              </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%"}}>
            <Button sx={{margin: 2, marginBottom: 0, color: "#ff3366"}} onClick={checkout}>Place Order</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Checkout;
