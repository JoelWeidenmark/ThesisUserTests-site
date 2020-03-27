import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from "gatsby";
import {LocalStateContext} from "../../../context/LocalStateContext"




const ProfileWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ProfileImage = styled.div`
    height: 40px;
    width: 40px;
    min-width: 40px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.fbBorderGray};
    overflow: hidden;
    >img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ProfileName = styled.p`
    font-size: 0.9rem;
    font-weight:bold;
    color: ${props => props.theme.fbBlue};
    margin-left: 5px;
`

const Linked = styled(Link)`
    border: none; 
    outline: none;
    text-decoration: none;
`


const ProfileBar = () => {
    const {getProfile} = useContext(LocalStateContext)

    return (
        <Linked to="/profile-accep/" state={{Name: "Test User"}}>
            <ProfileWrapper>
                <ProfileImage>
                    <img src={require(`../../../images/${getProfile('Test User').ProfileImage}.jpg`)}></img>
                </ProfileImage>
                <ProfileName>Test User</ProfileName>
            </ProfileWrapper>
        </Linked>
    )
}

export default ProfileBar
