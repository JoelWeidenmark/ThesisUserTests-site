import React, {useState, useContext, useEffect} from 'react'
import styled from "styled-components";
import PostProfileBar from "../PostProfileBar/PostProfileBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import PostComment from "../PostComment/PostComments"
import PostWriteComment from "../PostWriteComment/PostWriteComment"
import {LocalStateContext} from "../../../context/LocalStateContext"
import PostContent from "../PostContent/PostContet"
import PostContet from '../PostContent/PostContet';



const PostFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #CCC;
    background-color: #FFFFFF;
    padding: 10px 15px;
    color: ${props => props.theme.fbTextGray};
    border-radius: 5px;
    margin-bottom: 10px;
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
    font-size: 0.9rem;
    padding: 5px 0px;
`

const LikesAndComments = styled.div`
    display: flex;
    flex-direction: row;
    height: 35px;
    width: 100%;
    margin-top: 10px;
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
        cursor: pointer;
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


const PostText = (props) => {
    const {postsState, setPostsState} = useContext(LocalStateContext)
    const [commentList, setCommentList] = useState(props.postInfo.Comments);
    const [count, setCount] = useState(0);
    
    const incrementLikes = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCommentList(props.postInfo.Comments)
    }, [postsState])

    return (
        <PostFrame>
            <ProfileBar>
                <PostProfileBar postInfo={props.postInfo}>

                </PostProfileBar>
            </ProfileBar>
            <TextContent>
                
                {props.postInfo.Text}
            </TextContent>
            <PostContet postInfo={props.postInfo}></PostContet>
            <LikesAndComments>
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
                    commentList.map((commentInfo, i) =>(
                    <PostComment comment={{commentInfo, setPostsState}} postID={props.postInfo.ID} key={i}></PostComment>
                ))}
            </CommentsField>
            <WriteCommentWrapper>
                <PostWriteComment postInfo={props.postInfo}>
                </PostWriteComment>
            </WriteCommentWrapper>
        </PostFrame>
    )
}

export default PostText
