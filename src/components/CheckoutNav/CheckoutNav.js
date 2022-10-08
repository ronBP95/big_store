import React from 'react';
import { Toolbar, Typography, AppBar } from '@mui/material'

const CheckoutNav = () => {
    return (
        <div>
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Big storefront
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default CheckoutNav;
