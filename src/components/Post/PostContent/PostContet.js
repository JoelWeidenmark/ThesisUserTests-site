import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';


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


const ImageWrapperAd = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    >img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
`

const VideoWrapperAd = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
`

const AdText = styled.div`
    font-size: 0.75rem;
    margin-top: 10px;
    margin-left: 1px;
    >span{
        color: ${props => props.theme.fbBlue}
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
    if(props.postInfo.Type === "Ad"){
        return (
            <>
                <ImageWrapperAd>
                    <img src={require(`../../../images/${props.postInfo.Image}`)}></img>
                </ImageWrapperAd>
                <AdText>
                    This is an advert by <span>{props.postInfo.Name}</span>
                </AdText>
            </>
        )
    }
    if(props.postInfo.Type === "AdVideo"){
        return (
            <>
                <VideoWrapperAd>
                    <ReactPlayer
                        url={props.postInfo.Video}
                        width='100%'
                        height='100%'
                        controls={false}
                        playing={true}
                    />
                </VideoWrapperAd>
                <AdText>
                    This is an advert by <span>{props.postInfo.Name}</span>
                </AdText>
            </>
        )
    }
}

export default PostContet
