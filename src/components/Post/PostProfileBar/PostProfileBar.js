import React, {useContext} from 'react'
import styled from "styled-components"
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from "@fortawesome/free-solid-svg-icons";
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
    color: ${props => props.theme.fbBlue};
    >span{
        font-size: 0.8rem;
        >span{
            font-size: 0.6rem;
            color: ${props => props.theme.fbTextGray};
        }
    }
`

const TimeStamp = styled.p`
    font-size: 0.7rem;
    color: black;
`

const LinkedImg = styled(Link)`

`
const LinkedName = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.fbBlue};
    margin-right: 5px;
`

const LinkedTo = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.fbBlue};
    margin-left: 5px;
`

const PostProfileBar = (props) => {
    const {getProfile, changeActiveUser} = useContext(LocalStateContext)


    return (
        <ProfileWrapper>
            <LinkedImg to="/profile-accep/" onClick={() => (changeActiveUser(props.postInfo.Name))}>
                <ProfileImage>
                    <img src={require(`../../../images/${getProfile(props.postInfo.Name).ProfileImage}.jpg`)}></img>
                </ProfileImage>
            </LinkedImg>
            <NameAndTime>
                <ProfileName>
                    <LinkedName to="/profile-accep/" onClick={() => (changeActiveUser(props.postInfo.Name))}>
                    {props.postInfo.Name}
                    </LinkedName>
                    {props.postInfo.To ?
                    <span> 
                        <span>
                            <FontAwesomeIcon icon={faPlay} />
                        </span> 
                        <LinkedTo to="/profile-accep/" onClick={() => (changeActiveUser(props.postInfo.To))}>
                            {props.postInfo.To}
                        </LinkedTo>   
                    </span> 
                    : <span></span> }
                </ProfileName>
                <TimeStamp>
                    {props.postInfo.TimeStamp}
                </TimeStamp>
            </NameAndTime>
        </ProfileWrapper>
        
    )
}

export default PostProfileBar
