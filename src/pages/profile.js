import React from 'react';
import Nav from '../components/Nav/Nav'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Profile = () => {
    return (
        <div>
            <Nav />
            <Box sx={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", marginTop: 5}}>
                <Box>
                    Profile:
                </Box>
                <Box>
                    Name:
                </Box>
                <Box>
                    Email:
                </Box>
                <Box>
                    Order History:
                </Box>
            </Box>
        </div>
    );
}

export default Profile;
