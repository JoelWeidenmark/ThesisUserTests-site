import React, {useContext, useRef} from 'react'
import styled from "styled-components"
import Textarea from 'react-expanding-textarea'
import {LocalStateContext} from "../../../context/LocalStateContext"
import {BirthdayStateContext} from "../../../context/BirthdayContext"
import {TaskContext} from "../../../context/TaskContext"



const PostWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`

const TextBox = styled(Textarea)`
    width: 100%;
    border: 1px solid ${props => props.theme.fbBorderGray};
    resize: none;
    font-size: 0.8rem;
    outline: none;
    background-color: ${props => props.theme.fbGray};
    border-radius: 5px;
`

const PostButton = styled.div`
    width: 80%;
    height: 25px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.fbBlue};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    color: white;
    :hover{
        background-color: ${props => props.theme.fbLightBlue};
        cursor: pointer;
    } 
`

const PostBirthday = () => {

    const birthdayMessage = useRef(null);
    const {addNewPost} = useContext(LocalStateContext);
    const {setIsBirthdayOpen} = useContext(BirthdayStateContext)
    const {checkItem} = useContext(TaskContext)

    const postClick = () => {
        checkItem(8);
        const postValue = birthdayMessage.current.value;
        setIsBirthdayOpen();
        if(postValue){
            addNewPost(postValue, "Olivia Stevens")
            birthdayMessage.current.value = "";
        }
    }

    return (
        <PostWrapper>
            <TextBox
                ref={birthdayMessage}
                placeholder={"Message..."}
            />
            <PostButton onClick={() => postClick()}><span>Post</span></PostButton>
        </PostWrapper>
    )
}

export default PostBirthday
