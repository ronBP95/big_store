import * as React from 'react';

// Mui Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Font Imports
import '../../pages/index.css'

export default function HomeNav() {
  return (
    <Box sx={{ height: "auto", minHeight: 64, padding: {
      xs: 0,
      sm: 0
    }}}>
      <AppBar position="static" sx={{backgroundColor: "#28282a", minWidth: 375, minHeight: 64}}>
        <Toolbar sx= {{display: 'flex', justifyContent: 'space-between'}}>
            <Box 
            sx= {{ 
            flex: 1, 
            display: {
              xs: "none", // 0
              sm: "inline", // 600
            }}}/>
                <Typography variant="h6" component="div" sx={{fontFamily: "Inter", padding: {
                  xs: 2,
                  sm: 0
                }
                }}>
                    BIG STORE
                </Typography>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Button color="inherit" href='/login' sx={{fontFamily: "Open Sans"}}>Login</Button>
                <Button sx={{ color: '#ff3366', paddingRight:{xs: 0, sm: 2}, marginLeft:  {xs: 1, sm: 2}, fontFamily: "Open Sans"}} href='/register'>Register</Button>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
