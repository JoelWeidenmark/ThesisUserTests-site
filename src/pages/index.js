import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainFeed from "../components/MainFeed/MainFeed.js"
import { ThemeProvider } from "styled-components"

import * as theme from "../theme/theme.js"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <MainFeed></MainFeed>
    </Layout>
  </ThemeProvider>
  
)

export default IndexPage
