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

const Traits = () => {
    return (
        <Grid container spacing={3} sx={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", height: "45rem", paddingTop: 10, background: `url(${steps})`, backgroundSize: "cover"}}>
        <Grid item xs={3}>
          <Item>
            <Box>
              <WatchLaterIcon sx={{fontSize: "40pt"}}/>
              <Typography variant="h6" sx={{marginTop: 4}}>FAST VIEWING EXPERIENCE</Typography>
            </Box>
            <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%"}}>Shop with ease and speed. Page load times have been optimized to help you view your product faster!</Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Box>
              <ShoppingBagIcon sx={{fontSize: "40pt"}}/>
              <Typography variant="h6" sx={{marginTop: 4}}>PRODUCT VARIETY</Typography>
            </Box>
            <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%"}}>From the latest trendy bags to the freshest looking accessories, we have a large selection of products available for purchase.</Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Box>
              <KeyIcon sx={{fontSize: "40pt"}}/>
              <Typography variant="h6" sx={{marginTop: 4}}>EXCLUSIVE TO MEMBERS</Typography>
            </Box>
            <Box sx={{textAlign: "left", marginTop: 4, width: "85%", height: "100%"}}>In order to make sure our products are always in stock we limit our sales strictly to members. Create an acccount to start shopping with us today!</Box>
          </Item>
        </Grid>
      </Grid>
    );
}

export default Traits;
