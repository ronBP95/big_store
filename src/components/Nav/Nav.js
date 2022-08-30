import React from 'react';

const navStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "15px" 
}

const navLeft = {
    display: "flex",
    listStyleType: "none",
    paddingLeft: "15px",
}

const logo = {

}

const navRight = {
    display: "flex",
    paddingRight: "15px",
    listStyleType: "none",
}

const Nav = () => {
    return (
        <div style={navStyles}>
            <ul style={navLeft}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div style={logo}>
                BIG STORE
            </div>
            <ul style={navRight}>
                <li>Login</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

export default Nav;
