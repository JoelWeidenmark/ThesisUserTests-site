import React from 'react'
import styled from "styled-components"

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
    border: 1px solid black;
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

const PostProfileBar = () => {
    return (
        <ProfileWrapper>
            <ProfileImage>

            </ProfileImage>
            <NameAndTime>
                <ProfileName>
                    Name Surname
                </ProfileName>
                <TimeStamp>
                    17:20
                </TimeStamp>
            </NameAndTime>
            
        </ProfileWrapper>
        
    )
}

export default PostProfileBar