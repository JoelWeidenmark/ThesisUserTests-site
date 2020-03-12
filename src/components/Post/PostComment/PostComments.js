import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";

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
    border: 1px solid #606770;
`

const TextBox = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 7px;
    padding: 5px;
    background-color: ${props => props.theme.fbGray};
    >span{
        font-weight: bold;
        color: ${props => props.theme.fbBlue}
    }

`

const LikeAndAnswerWrapper = styled.div`
    display:flex;
    flex-direction: row;
    margin-left: 2px;
    margin-top: 2px;
    > p{
        margin-left: 10px;
    }

`



const PostComments = (props) => {
    const [likeCount, setLikeCount] = useState(1);

    const incrementCommentState = () => {
        setLikeCount(likeCount + 1)
    }

    return (
        <CommentWrapper>
            <ProfileImage></ProfileImage>
            <ColumnWrapper>
                <TextBox>
                    
                    <span>{props.comment.Writer} </span>
                    {props.comment.Comment}
                </TextBox>
                <LikeAndAnswerWrapper>
                    {likeCount}
                    <p>
                        <FontAwesomeIcon icon={faThumbsUp} onClick={() => incrementCommentState()} />
                    </p>
                </LikeAndAnswerWrapper>
            </ColumnWrapper> 
        </CommentWrapper>
    )
}

export default PostComments
