import React, {useContext, useEffect} from "react"
import { Link } from "gatsby"

import LandingLayout from "../components/Landing/LandingLayout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainFeed from "../components/MainFeed/MainFeed.js"
import { ThemeProvider } from "styled-components"
import {LocalStateContext} from "../context/LocalStateContext"

import * as theme from "../theme/theme.js"

const Landing = () => {

  return(
  <ThemeProvider theme={theme}>
    <LandingLayout>
        
    </LandingLayout>
  </ThemeProvider>
  
)}

export default Landing
