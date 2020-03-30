import React, {useState, useContext, useEffect} from 'react'
import { Link } from "gatsby";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp  } from "@fortawesome/free-solid-svg-icons";
import { LocalStateContext } from '../../../context/LocalStateContext';


const CommentWrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 5px;
    font-size: 0.85rem;
`
const ColumnWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
`

const ProfileImage = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.fbBorderGray};
    overflow: hidden;

    >img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const TextBox = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 7px;
    padding: 5px;
    background-color: ${props => props.theme.fbGray};

`

const LikeAndAnswerWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1px 4px 1px 4px;
    align-items: center;
    margin-left: 2px;
    margin-top: 2px;
    color: ${props => props.liked ? "#4b7fe8" : ''};
    cursor: pointer;
    border: 1px solid ${props => props.theme.fbBorderGray};
    width: 40px;
    border-radius: 5px;
    > p{
        margin-left: 10px;
        
    }

`

const LinkStyle = styled(Link)`
    border: none; 
    outline: none;
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme.fbBlue};
`


const PostComments = (props) => {
    const {changeCommentLikes, getProfile, changeActiveUser} = useContext(LocalStateContext)
    
    const likeComment = () => {
        changeCommentLikes(props.postID, props.comment.commentInfo.ID)
    }
    
    return (
        <CommentWrapper>
            <Link to={"/profile-accep/"}>
                <ProfileImage onClick={() => changeActiveUser(props.comment.commentInfo.Name)}>
                    <img src={require(`../../../images/${getProfile(props.comment.commentInfo.Name).ProfileImage}.jpg`)}></img>
                </ProfileImage>
            </Link>
            <ColumnWrapper>
                <TextBox>
                    <LinkStyle to={"/profile-accep/"}>
                        <span onClick={() => changeActiveUser(props.comment.commentInfo.Name)}>
                            {props.comment.commentInfo.Name + " "}
                        </span>
                    </LinkStyle>
                    {props.comment.commentInfo.Text}
                </TextBox>
                {props.comment.commentInfo.LikedByUser ? 
                    <LikeAndAnswerWrapper liked onClick={() => likeComment()}>
                        {props.comment.commentInfo.Likes}
                        <FontAwesomeIcon icon={faThumbsUp}  />
                    </LikeAndAnswerWrapper> 
                    : 
                    <LikeAndAnswerWrapper onClick={() => likeComment()}>
                        {props.comment.commentInfo.Likes}
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </LikeAndAnswerWrapper>}
            </ColumnWrapper> 
        </CommentWrapper>
    )
}

export default PostComments
