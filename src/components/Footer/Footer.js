import React from 'react';

const footStyle = {
    display:"flex",
    height: "50vh",
    width: "75vw",
    maxWidth: "100%",
    marginTop: "50px",
    // background: "blue",
    borderTop: "5px solid #142b6f",
}

const card = {
    paddingTop: "25px",
    width: "25%",
    height: "65%",
    borderBottom: "1px solid gray",
    // background: "red",
    lineHeight: "40px",
    listStyleType: "none",
    fontFamily: "Open Sans",
    fontSize: "13pt",
}

const footLogo = {
    paddingTop: "25px",
    width: "25%",
    fontSize: "16pt",
    textDecoration: "none",
    // background: "green",
    color: "navy",
    height: "65%",
    borderBottom: "1px solid gray",
}

const cardHeader = {
    cursor: "default",
}

const cardAnchor = {
    // background: "green",
    cursor: "pointer",
}

const Footer = () => {
    return (
        <div style={footStyle}>
            <h1 style={footLogo}><a>Logo</a></h1>
            <ul style={card}>
                <h3 style={cardHeader}>SHOP</h3>
                <li><a style={cardAnchor}>Hats</a></li>
                <li><a style={cardAnchor}>Shirts</a></li>
                <li><a style={cardAnchor}>Pants</a></li>
                <li><a style={cardAnchor}>Shoes</a></li>
            </ul>
            <ul style={card}>
                <h3 style={cardHeader}>ABOUT</h3>
                <li><a style={cardAnchor}>Mission</a></li>
                <li><a style={cardAnchor}>Team</a></li>
                <li><a style={cardAnchor}>Identity</a></li>
                <li><a style={cardAnchor}>Commitment</a></li>
            </ul>
            <ul style={card}>
                <h3 style={cardHeader}>MORE</h3>
                <li><a style={cardAnchor}>Contact</a></li>
                <li><a style={cardAnchor}>Socials</a></li>
                <li><a style={cardAnchor}>Careers</a></li>
            </ul>
        </div>
    );
}

export default Footer;
