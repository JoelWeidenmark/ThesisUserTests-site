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
    const {postsState, addComment} = useContext(LocalStateContext);
    const [statePosts, setStatePosts] = useState(postsState)
    useEffect(() => {
        setStatePosts(postsState)
    }, [postsState])

    return (
        <FeedWrapper>
            <AddPost></AddPost>
            <PostAd></PostAd>
            {postsState.Posts.map((post, i) => (<PostText postInfo={post} key={i}/>))}
        </FeedWrapper>
    )
}

export default MainFeed
