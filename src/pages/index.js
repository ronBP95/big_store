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

const credit = {
  paddingBottom: "25px"
}

const IndexPage = () => {
  return (
    <main style={mainStyles}>
      <Nav />
      <Hero />
      <Footer />
      <div style={credit}>Made by Ron Magpantay 2022</div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Big Store</title>
