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

    let token = localStorage.getItem('token')

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [orderHistory, setOrderHistory] = React.useState([])

    const getProfile = async () => {
        await axios({
            method: "get",
            url: "http://localhost:4000/api/users/me",
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
            setOrderHistory(filter.map((x) => x))
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
                <Paper sx={{width: "100%", height: 150, marginTop: 5, padding: 1}}>
                    <Typography>{orderHistory.price}</Typography>
                </Paper>
            </Container>
        </div>
    );
}

export default Profile;
