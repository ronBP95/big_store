import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HomeNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "#444444"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Big Store
          </Typography>
          <Button color="inherit" href='/login'>Login</Button>
          <Button color="inherit" href='/register'>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
