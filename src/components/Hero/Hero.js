import React from 'react';

// Mui Imports
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import SouthIcon from '@mui/icons-material/South';

// Image Imports
import storefront from '../../images/storefront.jpg'

// Font Imports
import '../../pages/index.css'

const Hero = () => {
    return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "85%", minHeight: "600px", backgroundImage: `url(${storefront})`, backgroundSize: "cover"}}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%"}}>
            <Box alt="gutter"></Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography variant="h4" sx={{color: "white", fontSize: "27pt", fontFamily: "Inter", textAlign: "center"}}>UPGRADE YOUR SHOPPING</Typography>
                <Box sx={{width: "35%", marginTop: 2, borderBottom: "3px solid #ff3366"}}></Box>
                <Box sx={{marginTop: 10, textAlign: "center"}}>
                    <Typography sx={{color: "white", fontFamily: "Inter"}}>Enjoy new products available only to members</Typography>
                    <Button href="/register" variant="contained" sx={{marginTop: 3, marginBottom: 2, background: "#ff3366", height: "50px", width: "150px", "&.MuiButtonBase-root:hover": {
                    bgcolor: "red"
                    }}}>Register</Button>
                    <Typography sx={{color: "white", fontFamily: "Inter"}}>Discover the experience</Typography>
                </Box>
            </Box>
            <SouthIcon sx={{color: "white", paddingBottom: 7}} />
        </Box>
    </Box>
    );
}

export default Hero;
