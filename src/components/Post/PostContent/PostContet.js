import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: flex;
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-top: 5px;
    max-height: 400px;
    border-top: 1px solid ${props => props.theme.fbBorderGray};
    border-bottom: 1px solid ${props => props.theme.fbBorderGray};
    overflow: hidden;
    >img{
        height: 100%;
        width:100%;
    }
    
`

const PostContet = (props) => {

    if(props.postInfo.Type === "Text"){
        return (
            <div>
                
            </div>
        )
    }
    if(props.postInfo.Type === "Image"){
        return (
            <ImageWrapper>
                <img src={require(`../../../images/${props.postInfo.Image}`)}></img>
            </ImageWrapper>
        )
    }
}

export default PostContet
