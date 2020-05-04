import React from "react";
import "../layout.css"
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import {Link} from "gatsby"


const LayoutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px ${props => props.theme.fbBorderGray};
    background-color: ${props => props.theme.fbLightGray};
    border-radius: 5px;
    width: 400px;
    padding: 30px 10px;
    overflow: scroll;
`

const TitleWrapper = styled.div`
`
const InfoTextWrapper = styled.div`
    text-align: center;
    margin-top: 5px;
    line-height: 1.4rem;

`
const ButtonWrapper = styled.div`
    margin-top: 50px;
    >a{
        text-decoration: none;
    }
`

const Button = styled.div`
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    background-color: ${props => props.theme.fbBlue};
    color : ${props => props.theme.fbWhite};
    width: 90px;
    height: 40px;
    :hover{
        background-color: ${props => props.theme.fbLightBlue};
    }
`



const LandingLayout = () => {

    
    const data = useStaticQuery(graphql`
        query SiteTitleQueryLanding {
        site {
            siteMetadata {
            title
            }
        }
        }
    `)

    const generateRandom = () => {
        let randomNum = Math.floor(Math.random() * 2) + 1;;
        return randomNum == 1 ? false : true;
    }

    let randomButton = generateRandom();

    return (
        <div>
            <LayoutWrapper>
                <ContentWrapper>
                    <TitleWrapper>
                        <h1>Hello and Welcome!</h1>
                    </TitleWrapper>
                    <InfoTextWrapper>
                        <p>

                            On the next page you will be presented with <b>9</b> short tasks. 
                            These tasks will be shown on the right hand side of the screen.
                            <br/>
                            <br/>
                            Complete the tasks and go through the questionnaire to complete the study.
                            <br/>
                            <br/>
                            Your participation will be completely anonymous
                            <br/>
                            <br/>
                            <b>Click the Button below to begin!</b>
                            <br/>
                            <br/>
                            Thank you!
                        </p>
                    </InfoTextWrapper>
                    <ButtonWrapper>
                        {randomButton ?
                            <Link to={"/"}>
                                <Button>
                                    Start!
                                </Button>
                            </Link>
                            :
                            <Link to={"/index-non-accep/"}>
                                <Button>
                                    Start!
                                </Button>
                            </Link>
                        }
                        
                    </ButtonWrapper>
                </ContentWrapper>
            </LayoutWrapper>
        </div>
    )
}

export default LandingLayout
