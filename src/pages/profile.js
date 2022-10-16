import * as React from 'react';
import Nav from '../components/Nav/Nav'
import axios from 'axios'

// Mui Imports
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
import { navigate } from 'gatsby';
import { toast } from 'react-toastify'

const Profile = () => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [orderHistory, setOrderHistory] = React.useState([])

    const getProfile = async () => {
        let token = localStorage.getItem('token')
        await axios({
            method: "get",
            url: "https://big-store-backend.glitch.me/api/users/me",
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(function (res) {
            console.log(res)
            setName(res.data.name)
            setEmail(res.data.email)
            let filter = res.data.orderHistory
            console.log("Filter", filter)
            setOrderHistory(filter)
        })
    }

    React.useEffect(() => {
        getProfile();
    }, []);

    console.log("Orders ", orderHistory)

    return (
        <div>
            <Nav />
            <Container sx={{width: {xs: "inherit", sm: "inherit", md: "65%"}}}>
                <Paper sx={{width: "100%", height: "auto", marginTop: 5, padding: 1}}>
                    <Button href="/shop" sx={{margin: 0.25, padding: 0, color: "#ff3366"}}>Back to shopping</Button>
                    <Box>
                        <Typography variant="h4" sx={{fontFamily: "Inter", marginBottom: 1}}>Hi there, {name}!</Typography>
                    </Box>
                    <Box sx={{display: "flex", gap: 0.5}}>
                        <Typography variant="h6">Profile</Typography> 
                    </Box>
                    <Box sx={{display: "flex", gap: 0.5}}>
                        <Typography sx={{fontFamily: "Inter", fontWeight: 700}}>Name:</Typography>
                        <Typography>{name}</Typography>
                    </Box>
                    <Box sx={{display: "flex", gap: 0.5}}>
                        <Typography sx={{fontFamily: "Inter", fontWeight: 700}}>Email:</Typography>
                        <Typography>{email}</Typography>
                    </Box>
                </Paper>
                <Box sx={{width: "100%", height: 150, marginTop: 5, padding: 1}}>
                    <Typography variant="h6" sx={{fontWeight: 700, marginTop: 1}}>Order History</Typography>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: 2}}>
                        {orderHistory.map((orders, index) => {
                            let initialValue = 0;
                            return (
                                <Paper key={index} sx={{width: "100%", marginTop: 2}}>
                                    <Typography sx={{fontFamily: "Open Sans", padding: 2, fontWeight: 700}}>Order #{index + 1}</Typography>
                                    {orders.map((items, index) => {
                                        initialValue += items.price
                                        return (
                                            <Box sx={{padding: 2}}>
                                                <Box key={index} sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", textAlign: "center", width: "100%", height: "auto", flexGrow: 1, border: "1px solid #cdd2ff", borderRadius: "5px"}}>
                                                    <Box component="img" src={items.image} sx={{width: {sx: "50px", sm: "50px", md: "100px"}, height: {xs: "50px", sm: "50px", md: "100px"}, margin: 2}} />
                                                    <Typography sx={{fontFamily: "Open Sans", fontWeight: 700, margin: 2, fontSize: {xs: "8pt", sm: "10pt", md: "12pt"}}}>{items.title}</Typography>
                                                    <Typography sx={{fontFamily: "Open Sans", margin: 2}}>{Number.parseFloat(items.price).toFixed(2)}</Typography>
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                                        <Box alt="gutter"></Box>
                                        <Typography sx={{marginBottom: 2, marginRight: 2, fontWeight: 700}}>Total: {Number.parseFloat(initialValue).toFixed(2)}</Typography>
                                    </Box>                                
                                </Paper>
                            )
                        })}

                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Profile;
