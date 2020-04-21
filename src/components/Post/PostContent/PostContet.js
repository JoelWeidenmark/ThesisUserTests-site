import React, {useContext} from 'react';
import styled, {keyframes}from 'styled-components';
import ReactPlayer from 'react-player';
import {LocalStateContext} from "../../../context/LocalStateContext"


const ImageWrapper = styled.div`
    display: flex;
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-top: 5px;
    max-height: 250px;
    border-top: 1px solid ${props => props.theme.fbBorderGray};
    border-bottom: 1px solid ${props => props.theme.fbBorderGray};
    overflow: hidden;
    >img{
        height: 100%;
        width:100%;
    }
    
`

const pulse = keyframes`
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  100%{
    transform: scale(0.95);
  }
`

const VideoWrapper = styled.div`
    display: flex;
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-top: 5px;
    max-height: 400px;
    height: 270px;
    border-top: 1px solid ${props => props.theme.fbBorderGray};
    border-bottom: 1px solid ${props => props.theme.fbBorderGray};
    overflow: hidden;
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

const ImageWrapperAdAnimate = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    animation: ${pulse} 2s infinite;
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

    const {isAcceptPage} = useContext(LocalStateContext)


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
    if(props.postInfo.Type === "Video"){
        return (
            <VideoWrapper>
                <ReactPlayer
                        url={props.postInfo.Video}
                        width='100%'
                        height='100%'
                        controls={true}
                        playing={false}
                    />
            </VideoWrapper>
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
    if(props.postInfo.Type === "AdAnimate"){
        return (
            <>
                {isAcceptPage ? 
                    <ImageWrapperAd>
                        <img src={require(`../../../images/${props.postInfo.Image}`)}></img>
                    </ImageWrapperAd>
                    :
                    <ImageWrapperAdAnimate>
                        <img src={require(`../../../images/${props.postInfo.Image}`)}></img>
                    </ImageWrapperAdAnimate>
                }
                
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
                        playing={!isAcceptPage}
                        volume={0}
                        muted={true}
                    />
                </VideoWrapperAd>
                <AdText>
                    This is an advert by <span>{props.postInfo.Name}</span>
                </AdText>
            </>
        )
    }
    if(props.postInfo.Type === "Link"){
        return (
            <ImageWrapper>
                <img src={require(`../../../images/${props.postInfo.Image}`)}></img>
            </ImageWrapper>
        )
    }
}

export default PostContet
