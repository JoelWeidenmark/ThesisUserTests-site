import React from 'react'
import Post from "../Post/PostText/PostText";

import styled from "styled-components"

const FeedWrapper = styled.div`
    width: 100%;
    height: 100%;
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
