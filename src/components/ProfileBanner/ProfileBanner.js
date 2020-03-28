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
    display: flex;
    flex-direciton: row;
    position: absolute;
    margin-top: 130px;
    margin-left: 10px;
`
const NameBox = styled.div`
    height: 30px;
    background-color: white;
    margin-top: 70px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    padding: 0px 5px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 5px;

    >span{
        color: white;
    }
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
    const{getProfile, getActiveUser} = useContext(LocalStateContext)
    console.log(getActiveUser())

    return (
        <Wrapper>
            <ProfileBox>
                <ProfileImage>
                    <img src={require(`../../images/${getProfile(getActiveUser()).ProfileImage}.jpg`)}></img>
                </ProfileImage>
                <NameBox>
                    <span>
                        {getActiveUser()}
                    </span>
                </NameBox>
            </ProfileBox>
            <img src={require(`../../images/${getProfile(getActiveUser()).BannerImage}.jpg`)}>
            </img>
        </Wrapper>
    )
}

export default ProfileBanner
