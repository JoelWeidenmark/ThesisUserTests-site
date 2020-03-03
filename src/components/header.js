import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.fbBlue};
  color: white;
  height: 5vh;
  align-items: center;
  padding: 5px;
`

const ContentWrapperLeft = styled.div`
  width: 20%;
  text-align: right;
`

const ContentWrapperRight = styled.div`
  width: 80%;
`


const Header = ({ siteTitle}) => (
  <HeaderWrapper>
    <ContentWrapperLeft>
      LOGO
    </ContentWrapperLeft>
    <ContentWrapperRight>
      
    </ContentWrapperRight>
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
