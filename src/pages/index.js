import * as React from "react"
import { Nav, Hero } from '../components/index'
import './index.css'

const mainStyles = {
  margin: "0",
  padding: "0",
  height: "100vh",
  width: "100vw",
  background: "green"
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
