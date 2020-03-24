import React, {useContext} from 'react'
import styled from "styled-components"
import {LocalStateContext} from "../../../context/LocalStateContext"

const ProfileWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ProfileImage = styled.div`
    height: 100%;
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
    width: 100%;
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
`

const PostProfileBar = (props) => {
    const {getProfileImage} = useContext(LocalStateContext)
    //console.log(props)
    //getProfileImage();

    return (
        <ProfileWrapper>
            <ProfileImage>
                <img src={require(`../../../images/${getProfileImage(props.postInfo.Name)}.jpg`)}></img>
            </ProfileImage>
            <NameAndTime>
                <ProfileName>
                    {props.postInfo.Name}
                </ProfileName>
                <TimeStamp>
                    {props.postInfo.TimeStamp}
                </TimeStamp>
            </NameAndTime>
            
        </ProfileWrapper>
        
    )
}

export default PostProfileBar
