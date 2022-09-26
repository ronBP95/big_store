import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Modal from '@mui/material/Modal';
import { Link, navigate } from "gatsby"

// Material-UI Icon Imports
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Routes
const Products = <Button sx={{color: 'white'}} href='/shop'>products</Button>
const Contact = <Button sx={{color: 'white'}} href='/contact'>Contact</Button>
const About = <Button sx={{color: 'white'}} href='/about'>about</Button>

const pages = [About, Contact, Products, ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Modal Style
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: "50%",
    left: '87.45%',
    transform: 'translate(-50%, -50%)',
    paddingTop: "10px",
    width: "25vw",
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <AccountCircleIcon onClick={profile} sx={{cursor: 'pointer'}} />
            <ShoppingCartIcon onClick={handleOpen} sx={{marginLeft: 2, cursor: 'pointer'}}/>
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
                  <Typography sx={{ mt: 2, paddingLeft: 1, paddingRight: 1}} id="modal-modal-description">
                    Your cart is empty. Fill it with something good.
                  </Typography>
                  <Button href='/shop'>Shop All</Button>
                  </Box>
                <Box sx={checkoutBar}>
                  Checkout, HR, Subtotal, Shipping
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
