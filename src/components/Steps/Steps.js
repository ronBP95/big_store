import React from 'react';

// Image Imports
import steps from '../../images/steps.jpg'

// Mui Imports
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';

// Icon Imports
import LoginIcon from '@mui/icons-material/Login';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MailIcon from '@mui/icons-material/Mail';

// Font Imports
import '../../pages/index.css'

// Grid Item 
const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: 'center',
    background: "none",
    marginTop: 50,
    fontSize: "16pt",
    // border: '1px solid black',
    color: theme.palette.text.secondary,
}));

const secondGrid = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    background: `url(${steps})`,
    // background: "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
    backgroundSize: "cover",
    height: "auto",
    width: "100%",
}
  
const number = {
    color: "#ff3366",
    fontSize: "24pt",
}

const Steps = () => {
    return (
        <div style={secondGrid}>
        <Typography variant="h3" sx={{paddingTop: 20, fontFamily: "Inter Bold"}}>HOW IT WORKS</Typography>
        <Grid rowSpacing={6} sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "row "}, justifyContent: "center", alignItems: "center", width: "100%", height: {sm: "auto", md: "45rem"}, paddingTop: {xs: 10, sm: 10, md: 0}, paddingBottom: {xs: 10, sm: 10, md: 0}, background: `url(${steps})`, backgroundSize: "cover"}}>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Typography style={number}>1.</Typography>
                <LoginIcon sx={{marginTop: 4, fontSize: "64pt", color: "black"}} />
              </Box>
              <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%", fontFamily: "Open Sans"}}>Sign up with your name, email, and a secure password you have never used before.</Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Typography style={number}>2.</Typography>
                <LibraryAddIcon sx={{marginTop: 4, fontSize: "64pt", color: "black"}} />
              </Box>
              <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%", fontFamily: "Open Sans"}}>Products are always in stock so feel free to add any products to your cart. Cart size is limited to 5 per purchase order.</Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Typography style={number}>3.</Typography>
                <MailIcon sx={{marginTop: 4, fontSize: "64pt", color: "black"}}/>
              </Box>
              <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%", fontFamily: "Open Sans"}}>Checkout with speed and with ease. You will receive an email receipt at the email address you used to sign in with.</Box>
            </Item>
          </Grid>
        </Grid>
        <Button href='/register' sx={{marginBottom: 20, height: "50px", width: "150px", background: "#ff3366", color: "white"}}>Start Now</Button>
      </div>
    );
}

export default Steps;
