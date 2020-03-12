import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby";



const ProfileWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ProfileImage = styled.div`
    height: 100%;
    width: 40px;
    border-radius: 50%;
    border: 1px solid black;
`
const ProfileName = styled.p`
    font-size: 0.9rem;
    font-weight:bold;
    color: ${props => props.theme.fbBlue};
    margin-left: 5px;
`



const ProfileBar = () => {
    return (
        <Link to="/profile-accep/" activeClassName="active">
            <ProfileWrapper>
                <ProfileImage>
                </ProfileImage>
                <ProfileName>Name Namesson</ProfileName>
            </ProfileWrapper>
        </Link>
    )
}

export default ProfileBar
