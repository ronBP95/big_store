import React from 'react';

// Mui Imports
import Box from "@mui/material/Box"
import { Typography } from '@mui/material';

// Icon Imports
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Font Import
import "../../pages/index.css"

const Footer = () => {
    return (
        <Box sx={{width: "100%", height: "25%", background: "#fff5f8"}}>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1, marginBottom: 2}}>
                    <a href="https://www.linkedin.com/in/ron-magpantay/"><LinkedInIcon sx={{fontSize: "26pt", cursor: "pointer", color: "black"}}/></a>
                    <a href="https://github.com/ronBP95/big_store"><GitHubIcon sx={{fontSize: "26pt", cursor: "pointer", color: "black"}}/></a>
                </Box>
                <Typography sx={{fontFamily: "Open Sans"}}>© Big Store 2022</Typography>
                <Typography sx={{fontFamily: "Open Sans"}}>Created with Material UI by Ron Magpantay</Typography>
            </Box>
        </Box>
    );
}

export default Footer;
