import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare ,faSend } from "@fortawesome/free-solid-svg-icons";

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
    border: 1px solid ${props => props.theme.fbBorderGray};
    border-radius: 15px;
    padding: 5px;
    background-color: ${props => props.theme.fbGray};
    color: ${props => props.theme.fbTextLightGray};

`



const PostWriteComment = (props) => {
    const nameForm = useRef(null);
    const [stateRows, setStateRows] = useState(1);

    const handleClick  = () => {
        const formValue = nameForm.current.value;
        props.parentCallback({
            Writer: "Name Namesson",
            Comment: formValue
        });
    }

    return (
        <CommentWrapper>
            <ProfileImage></ProfileImage>
            <ColumnWrapper>
                <TextBox>
                <textarea ref={nameForm}
                rows={1} >
                </textarea>
                <button onClick={handleClick}>Post</button>
                <FontAwesomeIcon icon={faSend} />
                </TextBox>
            </ColumnWrapper> 
        </CommentWrapper>
    )
}

export default PostWriteComment
