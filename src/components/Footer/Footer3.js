import * as React from 'react';

// Mui Imports
import { Typography, Grid, Container, Box } from '@mui/material';

// Icon Imports
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const containerStyle = {
    width: "100%",
    height: "35%",
    background: "#fff5f8"
}

const line = {
    width: "2em",
    fontSize: "16pt",
    marginTop: "0.5em",
    height: "2px",
    background: "black",
}

const header = {
    fontSize: "20pt"
}

const options = {
    fontSize: "12pt"
}

const Footer = () => {
    return (
        <div style={containerStyle}>
            <Container sx={{width: "100%"}}>
                <Grid container spacing={2} sx={{paddingTop: 5}}>
                    <Grid item xs={4}>
                        <Box sx={{display: "flex", paddingTop: 6, textAlign: "left"}}>
                            <GitHubIcon sx={{marginRight: 5, fontSize: "44pt"}}/>
                            <LinkedInIcon sx={{fontSize: "44pt"}}/>
                        </Box>
                        <Typography sx={{fontSize: "16pt", marginTop: 3}}>© Big Store 2022</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={header}>Legal</Typography>
                        <hr style={line}></hr>
                        <Typography style={options}>Terms</Typography>
                        <Typography>Privacy</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={header}>PlaceHolder</Typography>
                        <hr style={line}></hr>
                        <Typography>Terms</Typography>
                        <Typography>Privacy</Typography>
                    </Grid>
                </Grid>
                <Typography sx={{marginTop: 3}}>Website made by Ron Magpantay. Source code is available on Github.</Typography>
            </Container>
        </div>
    );
}

export default Footer;
