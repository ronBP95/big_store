import React from 'react';
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

const Shop = () => {
    return (
        <div style={shopStyles}>
            <Nav />
            <Footer />
        </div>
    );
}

export default Shop;
