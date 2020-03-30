 import React from 'react'
 import styled from "styled-components"


 const PostFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #CCC;
    background-color: #FFFFFF;
    padding: 10px 15px;
    color: ${props => props.theme.fbTextGray};
    border-radius: 5px;
    margin-bottom: 10px;
`

 
 const PostAd = () => {
     return (
         <PostFrame>
            Ad Post In Dev
         </PostFrame>
     )
 }
 
 export default PostAd
 