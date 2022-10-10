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
            <Container sx={{width: 750}}>
                <Box sx={{width: "100%", height: 100, marginTop: 5, padding: 1}}>
                    <Box>
                        Profile
                    </Box>
                    <Box>
                        Name: {name}
                    </Box>
                    <Box>
                        Email: {email}
                    </Box>
                </Box>
                <Box sx={{width: "100%", height: 150, marginTop: 5, padding: 1}}>
                    <Typography variant="h6">Order History</Typography>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: 2}}>
                        {orderHistory.map((orders, index) => {
                            let initialValue = 0;
                            return (
                                <Paper key={index} sx={{width: "100%", marginTop: 2}}>
                                    <h2>Order #{index + 1}</h2>
                                    {orders.map((items, index) => {
                                        initialValue += items.price
                                        return (
                                            <Box>
                                                <Box key={index} sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                                                <h4>{items.title}</h4>
                                                <p>{items.price}</p>
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                    <Typography sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%"}}>Total: {initialValue}</Typography>
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
