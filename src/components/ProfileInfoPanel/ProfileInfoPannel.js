import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faGraduationCap, faHeart, faBuilding } from "@fortawesome/free-solid-svg-icons";
import {LocalStateContext} from "../../context/LocalStateContext"

const InfoPanelWrapper = styled.div`
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
`

const InfoWrapper = styled.div`
    width: 100%;
    background-color: white;
    border-radius:5px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    margin-bottom: 5px;
    display:flex;
    flex-direction: column;
    padding: 5px;
    
    >div{
        margin-bottom: 7px;
        color: ${props => props.theme.fbTextGray};
        font-size: 0.8rem;

        >span{
            color: ${props => props.theme.fbBlue}
        }
    }
`

const AdWrapper = styled.div`
    width: 100%;
    height: 200px;
    background-color: white;
    border-radius:5px;
    border: 1px solid ${props => props.theme.fbBorderGray}
`

const ProfileInfoPannel = () => {
    const {getProfile, getActiveUser} = useContext(LocalStateContext);
    
    /*const [activeUser, setActiveUser] = useState()
    useEffect(() => {
        setActiveUser(getActiveUser())
    }, [])*/

    const activeUser = getProfile(getActiveUser());


    return (
        <InfoPanelWrapper>
            <InfoWrapper>
                <div>
                    <FontAwesomeIcon icon={faGraduationCap} /> Studied at <span>{activeUser.Education}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBuilding} /> Works at <span>{activeUser.Work}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHeart} /> 
                            {activeUser.Relationship === "Single" ? 
                                <span> {activeUser.Relationship}</span>
                                : 
                                <> In a <span>{activeUser.Relationship}</span></> }

                </div>
                <div>
                    <FontAwesomeIcon icon={faHome} /> Lives in <span>{activeUser.Hometown}</span>
                </div>
            </InfoWrapper>
            <AdWrapper>
                Ad
            </AdWrapper>
        </InfoPanelWrapper>
    )
}

export default ProfileInfoPannel
