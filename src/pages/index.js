import * as React from "react"
import { Nav, Hero, Footer } from '../components/index'
import './index.css'

const mainStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0",
  padding: "0",
  width: "100%",
  maxWidth: "100%",
  // background: "green",
}


const IndexPage = () => {
  return (
    <main style={mainStyles}>
      <Nav />
      <Hero />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Big Store</title>
