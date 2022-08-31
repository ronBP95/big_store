import * as React from "react"
import { Nav, Hero } from '../components/index'
import './index.css'

const mainStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0",
  padding: "0",
  height: "100vh",
  width: "100vw",
  background: "rgb(58,180,107)",
}

const IndexPage = () => {
  return (
    <main style={mainStyles}>
      <Nav />
      <Hero />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Big Store</title>
