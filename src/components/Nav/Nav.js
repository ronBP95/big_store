import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const navStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "15px" ,
    background: "red",
}

const navLeft = {
    display: "flex",
    listStyleType: "none",
    paddingLeft: "15px",
    background: "blue",
}

const logo = {

}

const navRight = {
    display: "flex",
    paddingRight: "15px",
    listStyleType: "none",
    background: "blue",
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
                <li><AiOutlineShoppingCart /></li>
            </ul>
        </div>
    );
}

export default Nav;
