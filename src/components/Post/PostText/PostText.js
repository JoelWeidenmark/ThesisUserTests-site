import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import PostProfileBar from "../PostProfileBar/PostProfileBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import PostComment from "../PostComment/PostComments"
import PostWriteComment from "../PostWriteComment/PostWriteComment"



const PostFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #CCC;
    background-color: #FFFFFF;
    padding: 10px 15px;
    color: ${props => props.theme.fbTextGray};
    border-radius: 5px;
`

const ProfileBar = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    border: 1px solid white;
`

const TextContent = styled.div`

    margin-top: 5px;
    border: 1px solid white;
    padding: 5px;
`

const LikesAndComments = styled.div`
    display: flex;
    flex-direction: row;
    height: 35px;
    width: 100%;
    margin-top: 5px;
    border-top: 1px solid ${props => props.theme.fbBorderGray};
    border-bottom: 1px solid ${props => props.theme.fbBorderGray};
    align-items: center;
    justify-content: center;
    align-self: center;
    padding-left: 10%;
    font-size: 0.9rem;
    > div{
        font-weight: bold;
        margin-right: 10%;
    }
    > p{
        font-weight: bold;
        margin-top: 1px;
    }
`


const CommentsField = styled.div`
    display: flex;
    border: 1px solid white;
    margin-top: 5px;
    flex-direction: column;
`

const WriteCommentWrapper = styled.div`
    width: 100%;
    margin-top: 5px;
`


const Post = () => {

    const [commentList, setCommentList] = useState([
        {Writer: "Namess", Comment: "ASDFASF", Likes: 3},
        {Writer: "Joel", Comment:"Cheese", Likes: 2} 
    ]);
    const [count, setCount] = useState(0);

    const incrementLikes = () => {
        setCount(count + 1);
    }

    const addComment = (content) => {
        setCommentList([...commentList, content])
    }

    return (
        <PostFrame>
            <ProfileBar>
                <PostProfileBar>

                </PostProfileBar>
            </ProfileBar>
            <TextContent>
                <span>Name Surname </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper sem vel nisl molestie tristique. Aenean vehicula eleifend odio eget condimentum. Nam condimentum dignissim leo, vel mattis ligula consequat nec.
            </TextContent>
            <LikesAndComments>
                {/* <p>{count}</p> */}
                <div>
                    <FontAwesomeIcon icon={faThumbsUp} onClick={() => incrementLikes()} /> Like
                </div>

                <div>
                    <FontAwesomeIcon icon={faComment} onClick={() => incrementLikes()} /> Comment
                </div>
                <div>
                    <FontAwesomeIcon icon={faShare} onClick={() => incrementLikes()} /> Share
                </div>
            </LikesAndComments>
            <CommentsField>
                {
                    commentList.map(hello =>(
                    <PostComment comment={hello}></PostComment>
                ))}
            </CommentsField>
            <WriteCommentWrapper>
                <PostWriteComment parentCallback={addComment}>
                </PostWriteComment>
            </WriteCommentWrapper>
        </PostFrame>
    )
}

export default Post
