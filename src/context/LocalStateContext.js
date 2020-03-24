import React, {useState, createContext, useEffect} from 'react'
import {ContextInitState, UsersInitState} from "./ContextInitState";


//const ContextProvider = createContext(ContextInitState) 
const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

//Write set comment likes function. https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react


function PostsStateProvider({children}){
    const [postsState, setPostsState] = useState(ContextInitState);
    const [usersState, setUsersState] = useState(UsersInitState);

    const addNewPost = (postText) =>{
        const today = new Date()

        const highestID = postsState.Posts.reduce((acc, post) => (acc < post.ID ? post.ID : acc),0);
        const newPostID = highestID+1;
        let postObject = {
            ID: newPostID,
            Type: "Text",
            Name: "Test User",
            TimeStamp: `${today.getHours()}:${today.getMinutes() >= 10 ? today.getMinutes() : '0' + today.getMinutes()}`,
            Text: postText,
            Likes: 0,
            Comments: []
        }
        setUsersState({
            Users: usersState.Users.map((user) =>
            (user.Name == "Test User" ? {...user, PostIDs: [...user.PostIDs, newPostID]} : user))
        });
        setPostsState({Posts: [postObject, ...postsState.Posts]});
    }

    const addPostComment = (postID, commentText) => {
        const highestIDArray = postsState.Posts.map((post) =>
            post.ID === postID ?
            post.Comments.reduce((acc, comment)=>
                (acc < comment.ID ? comment.ID : acc),0)
            : null);

        const newCommentID = Math.max(...highestIDArray) + 1;

        let commentObject = {
            ID: newCommentID,
            Name: "Test User",
            Text: commentText,
            Likes: 0,
            Image: null
        }

        const newState = {Posts: postsState.Posts.map((post) => 
        post.ID === postID ?
        {...post, Comments: [...post.Comments, commentObject]} 
        : post)};
        setPostsState(newState);
        
    }

    const changeCommentLikes = (postID, commentID, isLiked) => {

        setPostsState({
                Posts: postsState.Posts.map((post) =>
                post.ID === postID ? 
                {...post, Comments: post.Comments.map((comment) => 
                    comment.ID === commentID ? 
                        {...comment, Likes: (isLiked ? comment.Likes+1 : 
                            (comment.Likes > 0 ? comment.Likes-1 : comment.Likes)
                            )
                        }
                        :comment)} 
                : post)
            }
        )
    }

    const getProfileImage = (userName) => {
        const foundUser = usersState.Users.find(user => userName == user.Name)
        return foundUser.ProfileImage
    }

    return(
        <LocalStateProvider value={{postsState, addPostComment, changeCommentLikes, addNewPost, getProfileImage}}>
            {children}
        </LocalStateProvider>
    )
}


export {PostsStateProvider, LocalStateContext};
