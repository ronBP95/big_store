import * as React from "react"
import './index.css'
import { ToastContainer } from "react-toastify"

// Mui Imports
import Box from '@mui/material/Box';

// Component Imports
import { HomeNav, Hero, Traits, QuiltedImageList, Steps, Footer } from '../components/index'

const IndexPage = () => {
  return (
    <Box className="landing">
      <HomeNav />
      <Hero />
      <Traits />
      <QuiltedImageList />
      <Steps />
      {/* <Footer /> */}
      <ToastContainer />
    </Box>
  )
}

export default IndexPage

export const Head = () => <title>Big Store | Home</title>
