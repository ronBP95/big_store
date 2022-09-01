import React from 'react';
import Banner from '../../images/banner.jpg'

const heroPage = {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    justifyContent: "center",
    height: "100%",
    width: "85vw",
    background: "green",
}

const heroBanner = {
    height: "75vh",
    width: "95vw",
    maxWidth: "100%",
    maxHeight: "100%",
    gridRow: "1 / 1",
    gridColumn: "1 / 1",
}

const heroText = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridRow: "1 / 1",
    gridColumn: "1 / 1",
    // background: "green",
    maxHeight: "85%",
}



const Hero = () => {
    return (
        <div style={heroPage}>
            <img src={Banner} style={heroBanner} />
            <p style={heroText}>Let's Spend Some Money Today</p>
        </div>
    );
}

export default Hero;
