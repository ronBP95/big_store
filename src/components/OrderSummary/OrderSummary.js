import React from 'react';

import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"

// Font Imports
import '../../pages/index.css'

const OrderSummary = (props) => {
    return (
        <Box sx={{display: "flex", flexdirection: {xs: "column", sm: "row", md: "row"}, width: "auto", height: "auto", justifyContent: "space-between", alignItems: "center", marginTop: 3, marginBottom: 3, border: "1px solid #cdd2ff", borderRadius: "5px"}}>
            <Box component="img" src={props.cartItem.image} sx={{width: "50px", height: "50px", padding: 2}}/>
            <Box>
                {props.cartItem.title}
            </Box>
            <Box sx={{marginRight: 2}}>
                <Typography sx={{fontFamily: "Open Sans"}}>{Number.parseFloat(props.cartItem.price).toFixed(2)}</Typography>
            </Box>
        </Box>
    );
}

export default OrderSummary;
