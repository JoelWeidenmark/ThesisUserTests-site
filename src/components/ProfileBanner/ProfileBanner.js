import React, {useContext} from 'react'
import styled from "styled-components"
import {LocalStateContext} from "../../context/LocalStateContext"


const Wrapper = styled.div`
    width: 100%;
    height: 250px;
    overflow: hidden;

    >img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const ProfileBox = styled.div`
    width: 310px;
    height: 110px;
    padding: 5px;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
    border-radius: 5px;
    margin-top: 130px;
    margin-left: 10px;
`

const ProfileImage = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid white;
    border-radius: 50%;
    overflow: hidden;

    >img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`



const ProfileBanner = () => {
    const{getProfile} = useContext(LocalStateContext)

    return (
        <Wrapper>
            <ProfileBox>
                <ProfileImage>
                    <img src={require(`../../images/${getProfile('Test User').ProfileImage}.jpg`)}></img>
                </ProfileImage>
            </ProfileBox>
            <img src={require(`../../images/${getProfile('Test User').BannerImage}.jpg`)}>
            </img>
        </Wrapper>
    )
}

export default ProfileBanner
