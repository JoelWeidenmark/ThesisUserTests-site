import React, {useContext} from 'react'
import {LocalStateContext} from '../../context/LocalStateContext'
import styled from "styled-components"
import ProfileBar from "./ProfileBar/ProfileBar"

const LeftPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
    position: -webkit-sticky;
    position: sticky;
    top: 40px;
`

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

const AdWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top:5px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    background-color: ${props => props.theme.fbWhite};
    border-radius: 5px;
    padding: 5px;
`

const LeftPanelAdBox = styled.div`
    display: flex;
    height: 200px;
    border: 1px solid ${props => props.theme.fbBorderGray};

    >img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const LeftPanelAdBoxNA = styled.div`
    display: flex;
    height: 350px;
    border: 1px solid ${props => props.theme.fbBorderGray};

    >img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const LeftPanel = () => {
    const{isAcceptPage} = useContext(LocalStateContext)

    return (
        <LeftPanelWrapper>
            <ProfileWrapper>
                <ProfileBar>

                </ProfileBar>
            </ProfileWrapper>
            <AdWrapper>
                {
                    isAcceptPage ?
                    <LeftPanelAdBox>
                        <img src={require(`../../images/adCoca.jpg`)}></img>
                    </LeftPanelAdBox>:
                    <LeftPanelAdBoxNA>
                        <img src={require(`../../images/adCoca.jpg`)}></img>
                    </LeftPanelAdBoxNA>
                }
            </AdWrapper>
        </LeftPanelWrapper>
    )
}

export default LeftPanel
