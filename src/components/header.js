import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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


const Header = ({ siteTitle}) => (
  <HeaderWrapper>
    <ContentWrapper>
      <Link to={"/"}>
        <LogoWrapper>
          <img src={require(`../images/logoFacebook.png`)}></img>
        </LogoWrapper>
      </Link>
    </ContentWrapper>
  </HeaderWrapper>

)



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
