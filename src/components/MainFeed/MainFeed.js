import React, {useContext, useState, useEffect} from 'react'
import PostText from "../Post/PostText/PostText";
import AddPost from "../AddPost/AddPost";
import {LocalStateContext} from "../../context/LocalStateContext"
import styled from "styled-components"
import PostAd from "../Post/PostAd/PostAd"




const FeedWrapper = styled.div`
    width: 100%;
    padding: 5px;
`

const MainFeed = () => {
    const {postsState, isAcceptPage} = useContext(LocalStateContext);
    const [statePosts, setStatePosts] = useState(postsState)
    useEffect(() => {
        setStatePosts(postsState)
    }, [postsState])

    const reorderedPosts = () => {
            let adList = []
            let postList = []
            let nonAcceptList = []

            adList = postsState.Posts.reduce((acc, post) => {
                if(post.Type === "Ad" || post.Type === "AdVideo" || post.Type === "AdAnimate"){
                    return [...acc, post]
                }
                else{
                    return [...acc]
                }
                
            },[]
            )

            postList = postsState.Posts.reduce((acc, post) => {
                if(post.Type === "Ad" || post.Type === "AdVideo" || post.Type === "AdAnimate"){
                    return [...acc]
                }
                else{
                    return [...acc, post]
                }
                
            },[]
            )

            //nonAcceptList = [...nonAcceptList, postList];
            nonAcceptList = [adList[0], ...postList];

            //console.log(adList)
    }
    reorderedPosts()


    return (
        <FeedWrapper>
            <AddPost></AddPost>
            {postsState.Posts.map((post, i) => 
                post.Type === "Ad" || post.Type === "AdVideo" || post.Type === "AdAnimate" ? <PostAd postInfo={post} key={i}/> : <PostText postInfo={post} key={i}/>
            )}
        </FeedWrapper>
    )
}

export default MainFeed
