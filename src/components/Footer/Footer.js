import React from 'react';

// Mui Imports
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { Typography } from '@mui/material';

const Footer2 = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", width: "100%", height: "35%", background: "#fff5f8"}}>
            <Container sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "row"}, width: "100%", height: {xs: "auto", sm: "auto", md: "100%"}}}>
                <Box sx={{width: "25%", height: {xs: "100%", sm: "100%", md: "100%"}, marginTop: 3, marginBottom: 3}}>
                    <Typography>Socials</Typography>
                    <Typography>Option 1</Typography>
                    <Typography>Option 2</Typography>
                    <Typography>Option 3</Typography>
                </Box>
                <Box sx={{width: "25%", height: {xs: "100%", sm: "100%", md: "100%"}, marginTop: 3, marginBottom: 3}}>
                    <Typography>Legal</Typography>
                    <Typography>Option 1</Typography>
                    <Typography>Option 2</Typography>
                    <Typography>Option 3</Typography>
                </Box>
                <Box sx={{width: "25%", height: {xs: "100%", sm: "100%", md: "100%"}, marginTop: 3, marginBottom: 3}}>
                    <Typography>Language</Typography>
                    <Typography>Option 1</Typography>
                    <Typography>Option 2</Typography>
                    <Typography>Option 3</Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer2;
