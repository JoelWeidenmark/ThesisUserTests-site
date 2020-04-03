import React, {useContext} from 'react'
import {LocalStateContext} from '../../context/LocalStateContext'
import styled, {keyframes} from "styled-components"
import Birthday from "../Birthday/Birthday"

const RightPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
    position: -webkit-sticky;
    position: sticky;
    top: 40px;
`

const pulse = keyframes`
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  100%{
    transform: scale(0.95);
  }
`


const BirthdayBar = styled.div`
    display: flex;
    flex-direction: row;
`

const AdWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    background-color: ${props => props.theme.fbWhite};
    border-radius: 5px;
    padding: 5px;
`

const RightPanelAdBox = styled.div`
    display: flex;
    height: 200px;
    border: 1px solid ${props => props.theme.fbBorderGray};

    >img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const RightPanelAdBoxNA = styled.div`
    display: flex;
    height: 200px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    animation: ${pulse} 2s infinite;

    >img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const AdText = styled.div`
    font-size: 0.75rem;
    margin-top: 5px;
    margin-left: 1px;
    color: ${props => props.theme.fbTextGray};
    >span{
        color: ${props => props.theme.fbBlue}
    }
`

const CopyrightWrapper = styled.div`
    margin-top: 5px;
    width: 100%;
    font-size: 0.7rem;
    color: ${props => props.theme.fbTextGray};
    padding: 5px;

`

const RightPanel = () => {
    const{isAcceptPage} = useContext(LocalStateContext)

    return (
        <RightPanelWrapper>
            <BirthdayBar>
                <Birthday>

                </Birthday>
            </BirthdayBar>
            <AdWrapper>
                {
                    isAcceptPage ? 
                    <RightPanelAdBox>
                        <img src={require(`../../images/adNetflix.jpg`)}></img>
                    </RightPanelAdBox>:
                    <RightPanelAdBoxNA>
                        <img src={require(`../../images/adNetflix.jpg`)}></img>
                    </RightPanelAdBoxNA>
                }
                <AdText>
                    Advert by <span>Netflix</span>
                </AdText>
            </AdWrapper>
            <CopyrightWrapper>
                © {new Date().getFullYear()}, Built with
                {` `}Gatsby
            </CopyrightWrapper>
        </RightPanelWrapper>
    )
}

export default RightPanel
