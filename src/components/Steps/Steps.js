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
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    width: "100%",
    background: "none",
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
    fontFamily: "Inter"
}

const Steps = () => {
    return (
        <div style={secondGrid}>
        <Typography variant="h3" sx={{paddingTop: 10, marginBottom: 3, fontFamily: "Inter", fontSize: "24pt"}}>HOW IT WORKS</Typography>
        <Box sx={{borderBottom: "3px solid #ff3366", width: "15%", maxWidth: "170px", marginBottom: 6}}></Box>
        <Grid container columnSpacing={1} rowSpacing={5} sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: {xs: "column", sm: "column", md: "row"}, width: "100%", height: "auto", paddingTop: {xs: 10, sm: 10, md: 0}, paddingBottom: {xs: 10, sm: 10, md: 0}, marginBottom: 10}}>
          <Grid item xs={12} sm={12} md={4}>
            <Item>
              <Box>
                <Typography style={number}>1.</Typography>
                <LoginIcon sx={{marginTop: 4, fontSize: "64pt", color: "black"}} />
              </Box>
              <Box sx={{textAlign: {xs: "center", sm: "center", md: "left"}, marginTop: 4, width: "85%", height: "100%", fontFamily: "Open Sans"}}>Create an account with your name, email, and a secure password you have never used before to start shopping today.</Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Item>
              <Box>
                <Typography style={number}>2.</Typography>
                <LibraryAddIcon sx={{marginTop: 4, fontSize: "64pt", color: "black"}} />
              </Box>
              <Box sx={{textAlign: {xs: "center", sm: "center", md: "left"}, marginTop: 4, width: "85%", height: "100%", fontFamily: "Open Sans"}}>Products are always in stock so feel free to add any products to your cart. Cart size is limited to 5 per purchase order.</Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Item>
              <Box>
                <Typography style={number}>3.</Typography>
                <MailIcon sx={{marginTop: 4, fontSize: "64pt", color: "black"}}/>
              </Box>
              <Box sx={{textAlign: {xs: "center", sm: "center", md: "left"}, marginTop: 4, width: "85%", height: "100%", fontFamily: "Open Sans"}}>Checkout with speed and with ease. You will receive an email receipt at the email address you used to sign in with.</Box>
            </Item>
          </Grid>
        </Grid>
        <Button href='/register' sx={{marginBottom: 20, height: "50px", width: "150px", background: "#ff3366", color: "white", transition: "0.3s", "&.MuiButtonBase-root:hover": {bgcolor: "red", transition: "0.3s"}}}>Start Now</Button>
      </div>
    );
}

export default Steps;
