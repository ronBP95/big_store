import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Modal from '@mui/material/Modal';
import { navigate } from "gatsby"
import axios from 'axios'

// Material-UI Icon Imports
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Component Imports
import Cart from '../Cart/Cart'
import { toast } from 'react-toastify';

// Routes
const Products = <Button sx={{color: 'white'}} href='/shop'>products</Button>
const Contact = <Button sx={{color: 'white'}} href='/contact'>Contact</Button>
const About = <Button sx={{color: 'white'}} href='/about'>about</Button>
const pages = [About, Contact, Products, ];

const Nav = () => {

  const [isAuth, setIsAuth] = React.useState(false)

  const checkAuth = () => {
    const token = localStorage.getItem('token')
    if (token !== "null") {
      console.log("Authenticated")
      setIsAuth(true)
    } else {
      console.log("Not Authenticated")
      setIsAuth(false)
    }
  }

  React.useEffect(() => {
    console.log("Checking for auth...")
    checkAuth();
  }, [])

  // Modal Style
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: "50%",
    left: '84.9%',
    transform: 'translate(-50%, -50%)',
    paddingTop: "10px",
    width: "30vw",
    height: "99vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };

  const checkoutBar = {
    paddingBottom: '10px'
  }

  const profile = () => {
    navigate('/profile')
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    getCart();
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  
  // Cart GET Request

  const [cart, setCart] = React.useState([])
  let token = localStorage.getItem('token')

  const getCart = () => {
      axios.get('http://localhost:4000/api/users/cart', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(function (response) {
        let filter = response.data.cart
        console.log(filter)
        setCart(filter.map((cartItem, index) => <Cart cartItem={cartItem} key={index} number={index}/>))
      })
  }

  React.useEffect(() => {
    getCart();
  }, [])

  const handleLogout = () => {
    localStorage.setItem('token', null)
    navigate('/')
    toast("Successfully logged out")
    checkAuth();
  }

  let cartButton
  let authButton
  let registerButton
  let profileButton
  if (isAuth) {
    cartButton = <ShoppingCartIcon onClick={handleOpen} sx={{marginLeft: 2, cursor: 'pointer'}}/>
    profileButton = <AccountCircleIcon onClick={profile} sx={{cursor: 'pointer', marginLeft: 2}} />
    authButton = <Button sx={{marginBottom: 2, marginLeft: 1}} onClick={handleLogout}>Log Out</Button>
    registerButton = null
  } else {
    cartButton = <ShoppingCartIcon onClick={handleOpen} sx={{marginLeft: 2, cursor: 'pointer'}}/>
    profileButton = <AccountCircleIcon onClick={profile} sx={{cursor: 'pointer', marginLeft: 2}} />
    authButton = <Button sx={{marginBottom: 2, marginLeft: 1}} onClick={handleLogout}>Log Out</Button>
    registerButton = null
  }

  return (
    <AppBar position="static" sx={{backgroundColor: "#444444"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BIG STORE
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            {cartButton}
            {profileButton}
            {authButton}
            {registerButton}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
              <Box sx={style}>
                  <Box sx={{textAlign: 'center', width: '100%'}}>
                    <Box sx={{display: 'flex', justifyContent: 'end', width: '100%'}}>
                      <CloseIcon sx={{cursor: 'pointer', padding: 0.5}} onClick={handleClose}/>
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Your Cart
                    </Typography>
                    <Box>
                      {cart}
                    </Box>
                  </Box>
                <Box sx={checkoutBar}>
                  <Button href='/checkout'>Checkout</Button>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
