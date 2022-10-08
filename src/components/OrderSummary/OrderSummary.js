import React from 'react';

import { Box } from "@mui/material"

const OrderSummary = (props) => {
    return (
        <Box sx={{display: "flex", flexdirection: "row", justifyContent: "space-between", marginTop: 1, marginBottom: 1}}>
            <Box>
                {props.cartItem.title}
            </Box>
            <Box>
                {props.cartItem.price}
            </Box>
        </Box>
    );
}

export default OrderSummary;
