import * as React from 'react';
import Nav from '../components/Nav/Nav'
import axios from 'axios'

// Mui Imports
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

const Profile = () => {

    let token = localStorage.getItem('token')

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')

    const getMe = async () => {
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
        })
    }

    React.useEffect(() => {
        getMe();
    }, []);

    console.log(name)

    return (
        <div>
            <Nav />
            <Container sx={{width: 750}}>
                <Paper sx={{width: "100%", height: 150, marginTop: 5, padding: 1}}>
                    <Box>
                        Profile
                    </Box>
                    <Box>
                        Name: {name}
                    </Box>
                    <Box>
                        Email
                    </Box>
                </Paper>
                <Paper sx={{width: "100%", height: 150, marginTop: 5, padding: 1}}>
                    Order History
                </Paper>
            </Container>
        </div>
    );
}

export default Profile;
