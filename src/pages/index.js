import * as React from "react"
import './index.css'
import { ToastContainer } from "react-toastify"

// Mui Imports
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';


// Icon Imports


import LoginIcon from '@mui/icons-material/Login';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MailIcon from '@mui/icons-material/Mail';

// Component Imports
import { HomeNav, Hero, Traits, QuiltedImageList, Footer } from '../components/index'

// Image Imports
import store from '../images/store.webp'

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
  background: `url(${store})`,
  // background: "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}

const number = {
  color: "pink",
  fontSize: "24pt",
}

const IndexPage = () => {
  return (
    <Box className="landing">
      <Box className="nav">
        <HomeNav sx={{ height: "7.4%", minHeight: 60 }} />
      </Box>
      <Hero />
      <Traits />
      {/* Image List Container */}
      <Container sx={{height: "100%", width: "100%"}}>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", paddingTop: 5, paddingBottom: 5}}>
          <Typography>FOR ALL TYPES AND STYLES</Typography>
        </Box>
        <QuiltedImageList />
      </Container>
      {/* Image List Container */}

      {/* Second Grid Container */}
      <div style={secondGrid}>
        <Typography variant="h3" sx={{paddingTop: 20}}>HOW IT WORKS</Typography>
        <Grid container spacing={2} sx={{width: "75%", paddingBottom: 7}}>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Typography style={number}>1.</Typography>
                <LoginIcon sx={{marginTop: 4, fontSize: "64pt"}} />
              </Box>
              <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%"}}>Sign up with your name, email, and a secure password you have never used before.</Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Typography style={number}>2.</Typography>
                <LibraryAddIcon sx={{marginTop: 4, fontSize: "64pt"}} />
              </Box>
              <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%"}}>Products are always in stock so feel free to add any products to your cart. Cart size is limited to 5 per purchase order.</Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Typography style={number}>3.</Typography>
                <MailIcon sx={{marginTop: 4, fontSize: "64pt"}}/>
              </Box>
              <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%"}}>Checkout with speed and with ease. You will receive an email receipt with your purchase order at the email address you used to sign in with.</Box>
            </Item>
          </Grid>
        </Grid>
        <Button href='/register' sx={{marginBottom: 20, height: "50px", width: "150px", background: "red", color: "white"}}>Start Now</Button>
      </div>
      {/* Second Grid Container */}
      <Footer />
      <ToastContainer />
    </Box>
  )
}

export default IndexPage

export const Head = () => <title>Big Store | Home</title>
