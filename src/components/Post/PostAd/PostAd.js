import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components"
import PostComment from "../PostComment/PostComments"
import PostWriteComment from "../PostWriteComment/PostWriteComment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {LocalStateContext} from "../../../context/LocalStateContext"
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
    padding: 5px;
`
const AdFrame = styled.div`
    border: 1px solid #CCC;
    height: 300px;
    width: 100%;
`

const AdFrameNA = styled.div`
    border: 1px solid #CCC;
    height: 450px;
    width: 100%;
`

const LikesAndComments = styled.div`
    display: flex;
    flex-direction: row;
    height: 35px;
    width: 98%;
    border-bottom: 1px solid ${props => props.theme.fbBorderGray};
    align-items: center;
    justify-content: flex-end;
    align-self: center;
    font-size: 0.9rem;
`

const LikesWrapper = styled.div`
    width: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.fbBorderGray};
    border-radius: 5px;
    padding: 1px 4px 1px 4px;
    font-weight: normal;
    color: ${props => props.liked ? "#4b7fe8" : ''};
    cursor: pointer;
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
 
 const PostAd = (props) => {
    const {postsState, setPostsState, changePostLikes, isAcceptPage} = useContext(LocalStateContext)
    const [commentList, setCommentList] = useState(props.postInfo.Comments);
    
    const likePost = () => {

        changePostLikes(props.postInfo.ID)
    }
    
    useEffect(() => {
        setCommentList(props.postInfo.Comments)
    }, [postsState])

     return (
        <PostFrame>
            {isAcceptPage ?
                <AdFrame>
                    <PostContet postInfo={props.postInfo}></PostContet>
                </AdFrame>:
                <AdFrameNA>
                    <PostContet postInfo={props.postInfo}></PostContet>
                </AdFrameNA>
            }
            
            <LikesAndComments>
                {
                    props.postInfo.LikedByUser ?
                        <LikesWrapper liked onClick={() => likePost()}>
                            {props.postInfo.Likes}
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </LikesWrapper> :
                        <LikesWrapper onClick={() => likePost()}>
                            {props.postInfo.Likes}
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </LikesWrapper>  
                }
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
 
 export default PostAd
 