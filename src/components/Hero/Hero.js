import React from 'react';

// Mui Imports
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import SouthIcon from '@mui/icons-material/South';

// Image Imports
import storefront from '../../images/storefront.jpg'

const Hero = () => {
    return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "85%", backgroundImage: `url(${storefront})`, backgroundSize: "cover"}}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%"}}>
            <Box alt="gutter"></Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography variant="h4" sx={{color: "white", fontSize: "27pt"}}>UPGRADE YOUR SHOPPING</Typography>
                <Box sx={{marginTop: 10, textAlign: "center"}}>
                    <Typography sx={{color: "white"}}>Enjoy new products available only to members</Typography>
                    <Button href="/register" variant="contained" sx={{marginTop: 3, marginBottom: 2, background: "#ff3366", height: "70px", width: "200px", "&.MuiButtonBase-root:hover": {
                    bgcolor: "red"
                    }}}>Register</Button>
                    <Typography sx={{color: "white"}}>Discover the experience</Typography>
                </Box>
            </Box>
            <SouthIcon sx={{color: "white", paddingBottom: 7}} />
        </Box>
    </Box>
    );
}

export default Hero;
