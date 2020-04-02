import React, {useContext} from 'react'
import {LocalStateContext} from '../../context/LocalStateContext'
import styled from "styled-components"
import ProfileBar from "./ProfileBar/ProfileBar"
import {useAlert} from 'react-alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faVideo, faCommentDollar, faComment } from "@fortawesome/free-solid-svg-icons";

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

const SubpageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-top: 5px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    background-color: ${props => props.theme.fbWhite};
    border-radius: 5px;
    padding: 5px;

    >span{
        font-size: 0.85rem;
        color: ${props => props.theme.fbTextGray};
        border-radius: 5px;
        padding:5px;

        :hover{
            background-color: ${props => props.theme.fbGray};
            cursor: pointer;
        }
    }

`

const AdWrapper = styled.div`
    display: flex;
    flex-direction: column;
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

const AdText = styled.div`
    font-size: 0.75rem;
    margin-top: 5px;
    margin-left: 1px;
    color: ${props => props.theme.fbTextGray};
    >span{
        color: ${props => props.theme.fbBlue}
    }
`

const LeftPanel = () => {
    const alert = useAlert();

    const{isAcceptPage} = useContext(LocalStateContext)


    const notAvailable = () => {
        alert.show("Not Available")
    }

    return (
        <LeftPanelWrapper>
            <ProfileWrapper>
                <ProfileBar>

                </ProfileBar>
            </ProfileWrapper>
            <SubpageWrapper >
                <span onClick={() => notAvailable()}>
                    📰 News Feed
                </span>
                <span onClick={() => notAvailable()}>
                    📹 Videos
                </span>
                <span onClick={() => notAvailable()}>
                    🛒 Marketplace
                </span>
                <span onClick={() => notAvailable()}>
                    💬 Messages
                </span>
            </SubpageWrapper>
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
                <AdText>
                    Advert by <span>Coca Cola</span>
                </AdText>
            </AdWrapper>
        </LeftPanelWrapper>
    )
}

export default LeftPanel
