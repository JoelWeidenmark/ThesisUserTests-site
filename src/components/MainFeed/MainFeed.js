import React from 'react'
import Post from "../PostText/PostText";

import styled from "styled-components"

const FeedWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 5px;
`

const MainFeed = () => {
    return (
        <FeedWrapper>
            feedWrapper
            <Post></Post>
        </FeedWrapper>
    )
}

export default MainFeed
