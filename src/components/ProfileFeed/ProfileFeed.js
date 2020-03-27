import React, {useContext, useState, useEffect} from 'react'
import {LocalStateContext} from "../../context/LocalStateContext"
import styled from "styled-components"
import PostText from "../Post/PostText/PostText"
import AddPost from "../AddPost/AddPost"



const FeedWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px;
`

const ProfileFeed = (props) => {
   
    const {postsState} = useContext(LocalStateContext);
    console.log(props)

    const getProfilePosts = () => {
        return postsState.Posts.filter((post) => (post.Name === props.profile))
    }

    const profilePosts = getProfilePosts()
    return(
        <FeedWrapper>
            <AddPost/>
            {profilePosts.map((post, i) => (<PostText postInfo={post} key={i}/>))}
        </FeedWrapper>
    )
}

export default ProfileFeed
