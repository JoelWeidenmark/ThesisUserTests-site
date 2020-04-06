import React, {useContext} from "react";
import "./layout.css"
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, {keyframes} from 'styled-components';
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import Tasks from "../components/Tasks/Tasks"
import {TaskContext} from "../context/TaskContext"
import Header from "./header"


const FadeOut = keyframes`

to{
  transform: translateX(310px);
}
`;

const FadeIn = keyframes`

from{
  transform: translateX(310px);
}

to{
  transform: translateX(0);
}
`;

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
`

const CenterPane = styled.div`
  width: 60%;
`

const RightPane = styled.div`
  width: 20%;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.fbBlue};
  height: 5vh;
`
const TaskPane = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  z-index: 100;
  right: 0;
  animation: ${props => props.open ? FadeIn : FadeOut} 1s;
  animation-fill-mode: forwards;
`


const Layout = ({ children }) => {

  const {isOpen} = useContext(TaskContext);

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
            {
              isOpen?
              <TaskPane open>
                <Tasks>
                </Tasks>
              </TaskPane>
              :
              <TaskPane>
                <Tasks>
                </Tasks>
              </TaskPane>
            }
            
          </LayoutWrapper>
        
        <Footer>
            
        </Footer>
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
