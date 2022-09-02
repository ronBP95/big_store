import React, { useState } from 'react';
import { Nav, Footer } from '../components/index' 

const shopStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0",
    padding: "0",
    width: "100%",
    maxWidth: "100%",
    // background: "green",
}

const shopNav = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    height: "15vh",
    width: "75vw",
    borderBottom: "1px solid gray",
    marginTop: "25px",
    // background: "red",
}

const subNav = {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "25px",
    paddingBottom: "35px",
}

const navList = {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    // background: "green",
    width: "35%",
}

const navItems = {
    fontSize: "16pt",
    cursor: "pointer",
}

const Shop = () => {
    const [header, setHeader] = useState("All")
    return (
        <div style={shopStyles}>
            <Nav />
            <div style={shopNav}>
                <h1>{header}</h1>
                <div style={subNav}>
                    <ul style={navList}>
                        <li style={navItems} onClick={() => setHeader("All")}>All</li>
                        <li style={navItems} onClick={() => setHeader("Hats")}>Hats</li>
                        <li style={navItems} onClick={() => setHeader("Shirts")}>Shirts</li>
                        <li style={navItems} onClick={() => setHeader("Pants")}>Pants</li>
                        <li style={navItems} onClick={() => setHeader("Shoes")}>Shoes</li>
                    </ul>
                    <p>Filter By ⬇</p>
                </div>
            </div>
            <div>
                Shop Content will go here
            </div>
            <Footer />
        </div>
    );
}

export default Shop;

export const Head = () => <title>Big Store | Shop</title>
