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
const pages = [];
// const pages = [About, Contact, Products, ];

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
    // left: '84.9%',
    left: {xs: "54.9%", sm: "69.9%", md: "84.9%"},
    transform: 'translate(-50%, -50%)',
    paddingTop: "10px",
    // width: "30vw",
    width: {xs: "90vw", sm: "60vw", md: "30vw"},
    height: "99vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflowY: "scroll",
  };

  const checkoutBar = {
    paddingBottom: 3,
    paddingTop: 3,
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

  const getCart = () => {
      let token = localStorage.getItem('token')
      axios.get('https://big-store-backend.glitch.me/api/users/cart', {
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
    checkAuth();
  }

  let cartButton
  let authButton
  let registerButton
  let profileButton
  if (isAuth) {
    cartButton = <ShoppingCartIcon alt="cart" onClick={handleOpen} sx={{marginLeft: 2, cursor: 'pointer'}}/>
    profileButton = <AccountCircleIcon alt="profile" onClick={profile} sx={{cursor: 'pointer', marginLeft: 2}} />
    authButton = <Button sx={{marginLeft: 1, color: "#ff3366"}} onClick={handleLogout}>Log Out</Button>
    registerButton = null
  } else {
    cartButton = <ShoppingCartIcon onClick={handleOpen} sx={{marginLeft: 2, cursor: 'pointer'}}/>
    profileButton = <AccountCircleIcon onClick={profile} sx={{cursor: 'pointer', marginLeft: 2}} />
    authButton = <Button sx={{marginLeft: 1, color: "#ff3366"}} onClick={handleLogout}>Log Out</Button>
    registerButton = null
  }

  return (
    <AppBar position="static" sx={{backgroundColor: "#444444"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'Inter',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BIG STORE
          </Typography>
          <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: {xs: "center", sm: "center", md: "center"}, alignItems: "center", width: {xs: "inherit", sm: "inherit", md: "inherit"}}}>
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
