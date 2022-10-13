import React from 'react';

// Mui Imports
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import KeyIcon from '@mui/icons-material/Key';
import steps from '../../images/steps.jpg'
import { styled } from '@mui/material/styles';

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
    marginTop: {xs: 50, sm: 50, md: 0},
    fontSize: "16pt",
    // border: '1px solid black',
    color: theme.palette.text.secondary,
}));

const Traits = () => {
    return (
        <Grid container rowSpacing={4} sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "row "}, justifyContent: "center", alignItems: "center", width: "100%", height: {sm: "auto", md: "45rem"}, paddingTop: {xs: 10, sm: 10, md: 0}, paddingBottom: {xs: 10, sm: 10, md: 0}, background: `url(${steps})`, backgroundSize: "cover"}}>
        <Grid item xs={9} md={3}>
          <Item>
            <Box>
              <WatchLaterIcon sx={{fontSize: "40pt", color: "black"}}/>
              <Typography variant="h6" sx={{marginTop: 4, fontFamily: "Inter Bold", color: "black", maxWidth: "191px"}}>FAST VIEWING EXPERIENCE</Typography>
            </Box>
            <Box sx={{textAlign: "center", marginTop: 4, width: {sm: "95%", md: "85%"}, height: "100%", maxHeight: {xs: "none", sm: "none", md: "215px"}, fontFamily: "Open Sans"}}>Shop with ease and speed. Page load times have been optimized to help you view your product faster!</Box>
          </Item>
        </Grid>
        <Grid item xs={9} md={3}>
          <Item>
            <Box>
              <KeyIcon sx={{fontSize: "40pt", color: "black"}}/>
              <Typography variant="h6" sx={{marginTop: 4, fontFamily: "Inter Bold", color: "black", maxWidth: "191px"}}>EXCLUSIVE TO MEMBERS</Typography>
            </Box>
            <Box sx={{textAlign: "center", marginTop: 4, width: "85%", height: "100%", maxHeight: {xs: "none", sm: "none", md: "180px"}, fontFamily: "Open Sans"}}>In order to make sure our products are always in stock we limit our sales strictly to members.</Box>
          </Item>
        </Grid>
        <Grid item xs={9} md={3}>
          <Item>
            <Box>
              <ShoppingBagIcon sx={{fontSize: "40pt", color: "black"}}/>
              <Typography variant="h6" sx={{marginTop: 4, fontFamily: "Inter Bold", color: "black", maxWidth: "191px"}}>PRODUCT VARIETY</Typography>
            </Box>
            <Box sx={{textAlign: "center", marginTop: 4, width: "85%", height: "100%", maxHeight: {xs: "none", sm: "none", md: "215px"}, fontFamily: "Open Sans"}}>From bags to clothes to computer parts, we have a large selection of products available for purchase.</Box>
          </Item>
        </Grid>
      </Grid>
    );
}

export default Traits;
