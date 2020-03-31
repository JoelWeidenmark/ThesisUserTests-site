import React from "react";
import "./layout.css"
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

import Header from "./header"


const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  background-color: ${props => props.theme.fbGray};
`

const ContentPanelsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  max-width: 830px;
  background-color: ${props => props.theme.fbGray}
`

const LeftPane = styled.div`
  width: 20%;
  /*border: solid;*/
`

const CenterPane = styled.div`
  width: 60%;
  /*border: solid;*/
`

const RightPane = styled.div`
  width: 20%;
  /*border: solid;*/
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.fbBlue};
  height: 5vh;
`

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

  return (
    <div>
      
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
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
