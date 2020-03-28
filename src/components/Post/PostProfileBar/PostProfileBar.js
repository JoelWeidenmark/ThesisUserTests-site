import React, {useContext} from 'react'
import styled from "styled-components"
import { Link } from "gatsby";
import {LocalStateContext} from "../../../context/LocalStateContext"

const ProfileWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const ProfileImage = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.fbBorderGray};
    overflow: hidden;

    >img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const NameAndTime = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    justify-content: center;
`

const ProfileName = styled.p`
    font-size: 0.9rem;
    font-weight:bold;
    color: ${props => props.theme.fbBlue}
`

const TimeStamp = styled.p`
    font-size: 0.7rem;
    color: black;
`

const Linked = styled(Link)`
    border: none; 
    outline: none;
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const PostProfileBar = (props) => {
    const {getProfile, changeActiveUser} = useContext(LocalStateContext)


    return (
        <ProfileWrapper>
            <Linked to="/profile-accep/" onClick={() => (changeActiveUser(props.postInfo.Name))}>
                <ProfileImage>
                    <img src={require(`../../../images/${getProfile(props.postInfo.Name).ProfileImage}.jpg`)}></img>
                </ProfileImage>
                <NameAndTime>
                    
                        <ProfileName>
                            {props.postInfo.Name}
                        </ProfileName>
                    
                    <TimeStamp>
                        {props.postInfo.TimeStamp}
                    </TimeStamp>
                </NameAndTime>
            </Linked>
        </ProfileWrapper>
        
    )
}

export default PostProfileBar
