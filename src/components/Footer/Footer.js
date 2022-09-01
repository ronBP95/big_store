import React from 'react';

const footStyle = {
    display:"flex",
    height: "45vh",
    width: "85vw",
    maxWidth: "100%",
    marginTop: "50px",
    // background: "blue",
    borderTop: "5px solid #142b6f",
    borderBottom: "1px solid gray",
}

const card = {
    paddingTop: "25px",
    width: "25%",
    // background: "red",
    lineHeight: "40px",
    listStyleType: "none",
}

const footLogo = {
    paddingTop: "20px",
    width: "25%",
    fontSize: "16pt",
    textDecoration: "none",
    // background: "green",
    color: "navy",
}

const cardHeader = {
    cursor: "default",
}

const cardAnchor = {
    cursor: "pointer"
}

const Footer = () => {
    return (
        <div style={footStyle}>
            <a style={footLogo} href='/'><h1>Logo</h1></a>
            <ul style={card}>
                <h3 style={cardHeader}>SHOP</h3>
                <li style={cardAnchor}>Hats</li>
                <li style={cardAnchor}>Shirts</li>
                <li style={cardAnchor}>Pants</li>
                <li style={cardAnchor}>Shoes</li>
            </ul>
            <ul style={card}>
                <h3 style={cardHeader}>ABOUT</h3>
                <li style={cardAnchor}>Mission</li>
                <li style={cardAnchor}>Team</li>
                <li style={cardAnchor}>Identity</li>
                <li style={cardAnchor}>Commitment</li>
            </ul>
            <ul style={card}>
                <h3 style={cardHeader}>MORE</h3>
                <li style={cardAnchor}>Contact Us</li>
                <li style={cardAnchor}>Social Media</li>
                <li style={cardAnchor}>Careers</li>
            </ul>
        </div>
    );
}

export default Footer;
