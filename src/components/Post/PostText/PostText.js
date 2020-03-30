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
    width: 98%;
    /*border-top: 1px solid ${props => props.theme.fbBorderGray};*/
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


const PostText = (props) => {
    const {postsState, setPostsState, changePostLikes} = useContext(LocalStateContext)
    const [commentList, setCommentList] = useState(props.postInfo.Comments);
    
    const likePost = () => {

        changePostLikes(props.postInfo.ID)
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
            <LikesAndComments >
                    {
                        props.postInfo.LikedByUser ?
                            <LikesWrapper liked>
                                {props.postInfo.Likes}
                                <FontAwesomeIcon icon={faThumbsUp} onClick={() => likePost()} />
                            </LikesWrapper> :
                            <LikesWrapper>
                                {props.postInfo.Likes}
                                <FontAwesomeIcon icon={faThumbsUp} onClick={() => likePost()} />
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

export default PostText
