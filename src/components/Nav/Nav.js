import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const nav = {
    display: "flex",
    justifyContent: "center",
    width: "95vw",
    // borderBottom: "1px solid black",
    // background: "blue",
    fontFamily: "Open Sans",
}

const navStyles = {
    display: "flex",
    flexDirection: "row",
    width: "65%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "15px" ,
    paddingBottom: "15px",
    // background: "red",
}

const navLeft = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    minWidth: "42px",
    minHeight: "48px",
    cursor: "pointer",
    // background: "blue",
}

const navMiddle = {
    display: "flex",
    justifyContent: "space-between",
    // background: "red",
    alignItems: "center",
    width: "100%",
    height: "100%",
}

const navIcon = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    fontSize: "16pt",
    // background: "blue",
    height: "100%",
    cursor: "pointer",
}

const navLogo = {
    marginLeft: "25px",
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
}

const navAbout = {
    paddingRight: "25px",
    cursor: "pointer",
}

const hidden = {
    opacity: "0",
    cursor: "default",
}

const Nav = () => {
    return (
        <div style={nav}>
            <div style={navStyles}>
                <p style={navLeft}> Menu </p>
                <ul style={navMiddle}>
                    <p style={hidden}>backItem</p>
                    <a style={navLogo} href="/">BIG STORE</a>
                    <p style={navAbout}>Who We Are</p>
                </ul>
                <li style={navIcon}><AiOutlineShoppingCart /></li>
            </div>
        </div>

    );
}

export default Nav;
