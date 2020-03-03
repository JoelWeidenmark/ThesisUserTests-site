
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import MainFeed from "./MainFeed/MainFeed.js";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    `



const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`

const ContentPanelsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 80vw;
  background-color: ${props => props.theme.fbGray}
`

const LeftPane = styled.div`
  width: 20%;
  border: solid;
`

const CenterPane = styled.div`
  width: 60%;
  border: solid;
`

const RightPane = styled.div`
  width: 20%;
  border: solid;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.fbBlue};
  height: 5vh;
`


const Hi = styled.h1`
  color: ${props => props.theme.fbBlue};
`

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutWrapper>
        <ContentPanelsWrapper>
          <LeftPane>
            <LeftPanel></LeftPanel>
          </LeftPane>
          <CenterPane>
            <main>{children}</main>
          </CenterPane>
          <RightPane>
            <RightPanel>
              
            </RightPanel>
          </RightPane>
        </ContentPanelsWrapper>
      </LayoutWrapper>
      <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
