import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare, faPlay, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Textarea from 'react-expanding-textarea'

const CommentWrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 5px;
    font-size: 0.85rem;
`
const ColumnWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
`

const ProfileImage = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #606770;
`

const TextBox = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    border: 1px solid ${props => props.theme.fbBorderGray};
    border-radius: 15px;
    padding: 5px;
    background-color: ${props => props.theme.fbGray};
    color: ${props => props.theme.fbTextLightGray};


`
const TextBoxes = styled(Textarea)`
    border: none;
    resize: none; 
    width: 80%;
    background-color: ${props => props.theme.fbGray};
    outline: none;
`

const SendCommentButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 5px;
    width: 30px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    color: ${props => props.theme.fbBlue};
    max-height: 20px;
    cursor: pointer;

    :hover{
        background-color: white;
    }
`


const PostWriteComment = (props) => {
    const nameForm = useRef(null);
    const handleClick  = () => {
        const formValue = nameForm.current.value;
        if(formValue){
            nameForm.current.value = "";
            props.parentCallback({
                Writer: "Name Namesson",
                Comment: formValue,
                Likes: 0
            });
        }
    }

    return (
        <CommentWrapper>
            <ProfileImage></ProfileImage>
            <ColumnWrapper>
                <TextBox>
                    <TextBoxes
                        ref={nameForm}
                        placeholder="Write a comment ..."
                    />

                    <SendCommentButton onClick={handleClick}><FontAwesomeIcon icon={faPlay} /></SendCommentButton>
                </TextBox>
            </ColumnWrapper> 
        </CommentWrapper>
    )
}

export default PostWriteComment
