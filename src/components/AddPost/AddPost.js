import React, {useRef, useContext} from 'react'
import styled from 'styled-components'
import Textarea from 'react-expanding-textarea'
import {LocalStateContext} from "../../context/LocalStateContext"


const AddPostFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid ${props => props.theme.fbBorderGray};
    background-color: ${props => props.theme.fbWhite};
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
`

const CreatePostBorder = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    padding: 3px;
    align-items: center;
    background-color: ${props => props.theme.fbLightGray};
    border-bottom: 1px solid ${props => props.theme.fbBorderGray};
    border-radius: 1px;
    > span{
        font-size: 0.8rem;
        font-weight: bold;
        color: ${props => props.theme.fbTextGray}
    }
`

const WritePostWrapper = styled.div`
    width: 95%;
    display: flex;
    display-direction: row;
    margin-top: 5px;
    border-bottom: 1px solid ${props => props.theme.fbBorderGray};
    padding-bottom: 5px;
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
const TextBox = styled(Textarea)`
    margin-left: 5px;
    width: 80%;
    border: none;
    resize: none;
    font-size: 0.8rem;
    outline: none;
    margin-top: 10px;
`

const PostButton = styled.div`
    width: 60%;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
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


const AddPost = (props) => {

    const postText = useRef(null);
    const {addNewPost, getProfile} = useContext(LocalStateContext);
    const handlePostClick = () => {
        const postValue = postText.current.value;
        
        if(postValue){
            if(props.ToUser != "Test User"){
                addNewPost(postValue, props.ToUser)
                postText.current.value = "";
            }
            else{
                addNewPost(postValue);
                postText.current.value = "";
            }
            
        }
    }

    return (
        <AddPostFrame>
            <CreatePostBorder>
                <span>
                    Write Post
                </span>
            </CreatePostBorder>
            <WritePostWrapper>
                <ProfileImage>
                    <img src={require(`../../images/${getProfile('Test User').ProfileImage}.jpg`)}></img>
                </ProfileImage>
                <TextBox
                    ref={postText}
                    placeholder="What's on your mind?"
                />
            </WritePostWrapper>
            <PostButton onClick={() => handlePostClick()}><span>Post</span></PostButton>
            
        </AddPostFrame>
    )
}

export default AddPost