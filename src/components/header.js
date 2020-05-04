import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import styled from "styled-components"
import {LocalStateContext} from "../context/LocalStateContext"
import {TaskContext} from "../context/TaskContext"

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.fbBlue};
  color: white;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
`
const ContentWrapper = styled.div`
  width: 80vw;
  max-width: 830px;
  >a{
    text-decoration: none;
  }
`

const LogoWrapper = styled.div`
  height: 30px;
  width: 30px;
  >img{
    height: 100%;
    width: 100%;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
  }
`

const Logo = styled.div`
  height: 30px;
  width: 30px;
  border: solid 1px white;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  
  color: ${props => props.theme.fbBlue};
`


const Header = ({ siteTitle}) => {
  const {isAcceptPage} = useContext(LocalStateContext)
  const {checkItem} = useContext(TaskContext)

  return(
  <HeaderWrapper>
    <ContentWrapper onClick={() => checkItem(6)}>
      {
        isAcceptPage ?
        <Link to={"/"}>
          <Logo >
            FB
          </Logo>
        </Link>:
        <Link to={"/index-non-accep/"}>
          <Logo>
            FB
          </Logo>
        </Link>
      }
      
    </ContentWrapper>
  </HeaderWrapper>

)}



/*
const Header = ({ siteTitle }) => (


  <header
    style={{
      background: "blue",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)*/

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
