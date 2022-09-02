import React, { useState } from 'react';
import Banner from '../../images/banner.jpg'

const heroPage = {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
    width: "95vw",
    // background: "green",
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
    borderRadius: "20px",
    transition: "0.2s",
    background: "#0a192f",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
}

const hoverButton = {
    border: "1px solid white",
    padding: "15px",
    paddingLeft: "50px",
    paddingRight: "50px",
    borderRadius: "20px",
    transition: "0.2s",
    background: "white",
    color: "#0a192f",
    cursor: "pointer",
    textDecoration: "none",
}

const promoBanner = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    background: "#F9E099",
    fontFamily: "Open Sans",
    color: "#0a192f",
}

const promoText = {
    cursor: "pointer",
}

const promoHover = {
    opacity: "0.75",
    cursor: "pointer",
}

const anchorList = {
    marginTop: "30px"
}

const Hero = () => {
    const [mouseOver, setMouseOver] = useState(false)
    const [promoOver, setPromoOver] = useState(false)
    return (
        <div style={heroPage}>
            <div style={heroBanner} >
                <img src={Banner} style={heroImg}/>
            </div>
            <ul style={heroText}>
                <li>The future of buying</li>
                <li><span>-</span> is now</li>
                <li style={anchorList}>
                    <a style={mouseOver ? hoverButton : heroButton}
                    onMouseEnter={() => setMouseOver(!mouseOver)}
                    onMouseLeave={() => setMouseOver(!mouseOver)}
                    href="/shop"
                    >
                    Shop Now
                    </a>
                </li>
            </ul>
            <div style={promoBanner}>
                <p style={promoOver ? promoHover : promoText}
                onMouseEnter={() => setPromoOver(!promoOver)}
                onMouseLeave={() => setPromoOver(!promoOver)}
                >
                Get $15 off of your first order when you check out ➜
                </p>
            </div>
        </div>
    );
}

export default Hero;
