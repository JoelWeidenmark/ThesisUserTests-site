import React, {useContext} from 'react'
import styled from "styled-components";
import {BirthdayStateContext} from "../../context/BirthdayContext"
import PostBirthday from "./PostBirthday/PostBirthday"


const BirthdayWrapper = styled.div`
    width: 100%;
    height: 100%;
`

const BirthdayPerson = styled.div`
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.fbBlue};
    border: 1px solid ${props => props.theme.fbBorderGray};
    font-size: 0.9rem;
    padding: 5px 5px;
    cursor: pointer;
    :hover{
        background-color: ${props => props.theme.fbGray};
        
    }
`
const WriteBdPostWrapper = styled.div`
    width: 100%;
    margin-top: 5px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid ${props => props.theme.fbBorderGray};
    animation: fadein 2s;
`


const Birthday = () => {

    const {isBirthdayOpen, setIsBirthdayOpen} = useContext(BirthdayStateContext)
    console.log(isBirthdayOpen)
    return (
        <BirthdayWrapper >
            <BirthdayPerson onClick={() => (setIsBirthdayOpen(!isBirthdayOpen))}>
                <span>🎂</span><span>Olivia Stevens</span>
            </BirthdayPerson>
            {
                isBirthdayOpen ? 
                <WriteBdPostWrapper>
                    <PostBirthday>

                    </PostBirthday>
                </WriteBdPostWrapper>
                :
                ""
            }
        </BirthdayWrapper>
    )
}

export default Birthday
