import * as React from "react"
import './index.css'
import { ToastContainer } from "react-toastify"

// Mui Imports
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

// Icon Imports
import SouthIcon from '@mui/icons-material/South';

// Component Imports
import { HomeNav } from '../components/index'

// Image Imports
import storefront from '../images/storefront.jpg'

const IndexPage = () => {
  return (
    <Box className="landing">
      <Box className="nav">
        <HomeNav sx={{ height: "7.4%", minHeight: 60 }} />
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "75%", backgroundImage: `url(${storefront})`, backgroundSize: "cover"}}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%"}}>
          <Box></Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h4" sx={{color: "white", fontSize: "27pt"}}>UPGRADE YOUR SHOPPING</Typography>
            <Box sx={{marginTop: 10, textAlign: "center"}}>
              <Typography sx={{color: "white"}}>Enjoy new products available only to members</Typography>
              <Button variant="contained" sx={{marginTop: 3, marginBottom: 2, background: "#ff3366", height: "70px", width: "200px"}}>Register</Button>
              <Typography sx={{color: "white"}}>Discover the experience</Typography>
            </Box>
          </Box>
          <SouthIcon sx={{color: "white", paddingBottom: 3}} />
        </Box>
      </Box>
      <Box className="homePage">
        <Box className="landingImg"></Box>
        <Box className="landingTxt">
          <Box sx={{ width: 300 }}>
            <Typography variant="h5" sx={{marginY: 1}}>Our Shop</Typography>
            <Typography>BIG STORE shopping is an experience. One day the developer decided
              that it was time to create a store that fit the needs of the people.
              Instead of waiting around for a store to be built, the developer made
              a fake one to represent the needs of the people.
            </Typography>
            <Button href="/shop" sx={{ paddingX: 0, paddingY: 1 }}>Shop Now</Button>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  )
}

export default IndexPage

export const Head = () => <title>Big Store | Home</title>
