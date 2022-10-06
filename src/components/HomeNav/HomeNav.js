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
        <Toolbar sx= {{display: 'flex', justifyContent: 'space-between'}}>
            <Box sx= {{ flex: 1 }} />
                <Typography variant="h6" component="div">
                    Big Store
                </Typography>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Button color="inherit" href='/login'>Login</Button>
                <Button sx={{ color: '#ff3366', paddingRight: 2, marginLeft: 2}} href='/register'>Register</Button>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
