import React from 'react'
import styled from "styled-components";


const PostFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    border: 1px solid ${props => props.theme.fbGray};
    background-color: gray;
    padding: 5px;
    color: white;
`

const ProfileBar = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    border: 1px solid white;
`

const TextContent = styled.div`
    display: flex;
    height: 100%;
    margin-top: 5px;
    border: 1px solid white;
`

const LikesAndComments = styled.div`
    display: flex;
    height: 30px;
    margin-top: 5px;
    border: 1px solid white;
`

const CommentsField = styled.div`
    display: flex;
    height: 50px;
    border: 1px solid white;
    margin-top: 5px;
`


const Post = () => {

    return (
        <PostFrame>
            <ProfileBar>
             This is a Profile
            </ProfileBar>
            <TextContent>
                This is TextContent
            </TextContent>
            <LikesAndComments>
                Likes and Comments
            </LikesAndComments>
            <CommentsField>
                Comments
            </CommentsField>
        </PostFrame>
    )
}

export default Post
