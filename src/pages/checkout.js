import * as React from 'react';
import { Container, Box, Typography, Button, Paper } from '@mui/material';
import CheckoutNav from '../components/CheckoutNav/CheckoutNav'

const Checkout = () => {
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
              <Box sx={{display:"flex", justifyContent: "space-between", width: "100%" }}>
                <Typography>Products</Typography>
                <Typography>$Price</Typography>
              </Box>
              <Box sx={{display:"flex", justifyContent: "space-between", width: "100%" }}>
                <Typography>Shipping</Typography>
                <Typography>Free</Typography>
              </Box>
              <Box sx={{display:"flex", justifyContent: "space-between", width: "100%" }}>
                <Typography>Total</Typography>
                <Typography>$Price Function to add all</Typography>
              </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%"}}>
            <Button sx={{margin: 2, marginBottom: 0}}>Place Order</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Checkout;
