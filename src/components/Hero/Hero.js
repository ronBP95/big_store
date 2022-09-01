import React, { useState } from 'react';
import Banner from '../../images/banner.jpg'

const heroPage = {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    justifyContent: "center",
    alignItems: "center",
    height: "73.5%",
    width: "95vw",
    background: "green",
}

const heroBanner = {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    gridRow: "1 / 1",
    gridColumn: "1 / 1",
    overflowX: "hidden",
    overflowY: "hidden",
}

const heroImg = {
    height: "55em",
    width: "100%",
    objectFit: "cover",
    overflowX: "hidden",
    overflowY: "hidden",
}

const heroText = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gridRow: "1 / 1",
    gridColumn: "1 / 1",
    // background: "blue",
    height: "100%",
    width: "100%",
    fontFamily: "Inter",
    listStyleType: "none",
}

const headerRight = {

}

const headerLeft = {

}

const heroButton = {
    border: "1px solid #0a192f",
    padding: "15px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "20px",
    borderRadius: "20px",
    transition: "0.2s",
    background: "#0a192f",
    color: "white",
    cursor: "pointer",
}

const hoverButton = {
    border: "1px solid white",
    padding: "15px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "20px",
    borderRadius: "20px",
    transition: "0.2s",
    background: "white",
    color: "#0a192f",
    cursor: "pointer",
}

const Hero = () => {

    const [mouseOver, setMouseOver] = useState(false)

    return (
        <div style={heroPage}>
            <div style={heroBanner} >
                <img src={Banner} style={heroImg}/>
            </div>
            <ul style={heroText}>
                <li>The future of buying</li>
                <li><span>-</span> is now</li>
                <li>
                    <p style={mouseOver ? hoverButton : heroButton}
                    onMouseEnter={() => setMouseOver(!mouseOver)}
                    onMouseLeave={() => setMouseOver(!mouseOver)}
                    >
                    Shop Now
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Hero;
