import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const nav = {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    borderBottom: "1px solid black"
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
}

const navLogo = {
    marginLeft: "25px"
}

const navAbout = {
    paddingRight: "25px"
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
                    <p style={navLogo}>BIG STORE</p>
                    <p style={navAbout}>Who We Are</p>
                </ul>
                <li style={navIcon}><AiOutlineShoppingCart /></li>
            </div>
        </div>

    );
}

export default Nav;
