import React, {useContext, useState, useEffect} from 'react'
import {LocalStateContext} from "../../context/LocalStateContext"
import styled from "styled-components"
import PostText from "../Post/PostText/PostText"
import AddPost from "../AddPost/AddPost"

const FeedWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px 0px 5px 5px;
`

const ProfileFeed = (props) => {
   
    const {postsState} = useContext(LocalStateContext);
    
    const getProfilePosts = () => {
        return postsState.Posts.filter((post) => (post.Name === props.profile || post.To === props.profile))
    }
    const profilePosts = getProfilePosts();
    
    return(
        <FeedWrapper>
            <AddPost ToUser={props.profile} />
            {profilePosts.map((post, i) => (<PostText postInfo={post} key={i}/>))}
        </FeedWrapper>
    )
}

export default ProfileFeed
