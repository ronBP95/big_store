import * as React from 'react';
import { Container, Box, Typography, Button, Paper } from '@mui/material';
import CheckoutNav from '../components/CheckoutNav/CheckoutNav'
import axios from 'axios'

// Component Imports
import OrderSummary from '../components/OrderSummary/OrderSummary';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';

const Checkout = () => {

  const [cart, setCart]= React.useState([])
  const [total, setTotal] = React.useState([])
  let token = localStorage.getItem('token')

  const getCart = () => {
    axios.get('http://localhost:4000/api/users/cart', {
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
    await axios({
      method: "post",
      url: "http://localhost:4000/api/users/checkout",
      headers: {
          Authorization: 'Bearer ' + token
      }
    })
    .then(function (response) {
      console.log(response)
      navigate('/profile')
      toast("Checked Out Successfully")
    })
    .catch(function (res) {
      console.log(res)
      toast("Something went wrong")
    })
  }

  return (
    <div>
      <CheckoutNav />
      <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Box sx={{display: "flex", flexDirection: "column", width: "55%", border: "1px solid #eeeeee", marginTop: 10}}>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Typography sx={{marginTop: 2, marginBottom: 1}}>Checkout</Typography>
          </Box>
          <Box>
            <Typography sx={{padding: 2}}>Order Summary</Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 2, paddingRight: 3}}>
              <Box sx={{display:"flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
                <Typography>Products</Typography>
                <Typography>{cart}</Typography>
              </Box>
              <Box sx={{display:"flex", justifyContent: "space-between", width: "100%" }}>
                <Typography>Shipping</Typography>
                <Typography>Free</Typography>
              </Box>
              <Box sx={{display:"flex", justifyContent: "space-between", width: "100%" }}>
                <Typography>Total</Typography>
                <Typography>{total}</Typography>
              </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%"}}>
            <Button sx={{margin: 2, marginBottom: 0}} onClick={checkout}>Place Order</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Checkout;
