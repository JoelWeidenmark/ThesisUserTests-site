import React, {useState, createContext, useEffect, useContext} from 'react'
import {ContextInitState, UsersInitState} from "./ContextInitState";
import {TaskContext} from "./TaskContext"


//const ContextProvider = createContext(ContextInitState) 
const LocalStateContext = createContext(ContextInitState);
const LocalStateProvider = LocalStateContext.Provider;

//Write set comment likes function. https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react


function PostsStateProvider({children}){
    const [postsState, setPostsState] = useState(ContextInitState);
    const [usersState, setUsersState] = useState(UsersInitState);
    const [activeUser, setActiveUser] = useState("Test User");
    const [isAcceptPage, setAcceptPage] = useState(true);
    const {checkItem} = useContext(TaskContext);

    const addNewPost = (postText, toUser) =>{
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
            LikedByUser: false,
            Comments: []
        }
        postObject = toUser ? {...postObject, To: toUser} : postObject;
        
        setUsersState({
            Users: usersState.Users.map((user) =>
            (user.Name == "Test User" || user.Name == toUser ? {...user, PostIDs: [...user.PostIDs, newPostID]} : user))
        });
        setPostsState({Posts: [postObject, ...postsState.Posts]});
        checkItem(7)
        if(toUser === "Olivia Stevens")checkItem(8)
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

        //Check task 3
        if(postID === 10)checkItem(3)
    }

    const changePostLikes = (postID) => {

        setPostsState({
            Posts: postsState.Posts.map((post) =>
                post.ID === postID ? 
                {...post, 
                    Likes: (post.LikedByUser ? post.Likes - 1
                    : post.Likes + 1),
                    LikedByUser: !post.LikedByUser}
                : post
            )
        })
        
        //Check task 2 or 5

        if(postID === 6 || postID === 9 ){
            postID === 6 ? checkItem(2) : checkItem(5)
        }

    }

    const changeCommentLikes = (postID, commentID) => {
        setPostsState({
            Posts: postsState.Posts.map((post) =>
                post.ID === postID ? 
                {...post, Comments: post.Comments.map((comment) =>
                    comment.ID === commentID ? 
                    {...comment, 
                        Likes: (comment.LikedByUser ? comment.Likes - 1
                            : comment.Likes + 1),
                        LikedByUser: !comment.LikedByUser

                    } 
                    : comment
                )} 
                :post
            )

        })
    }

    const getProfile = (userName) => {
        const foundUser = usersState.Users.find(user => userName == user.Name)
        return foundUser
    }

    const changeActiveUser = (userName) => {
        setActiveUser(userName)
        if(userName === "Jim Rasmussen")checkItem(4)
    }

    const getActiveUser = () => {
        return activeUser
    }

    return(
        <LocalStateProvider value={{postsState, addPostComment, changePostLikes, changeCommentLikes, addNewPost, getProfile, changeActiveUser, getActiveUser, isAcceptPage, setAcceptPage}}>
            {children}
        </LocalStateProvider>
    )
}


export {PostsStateProvider, LocalStateContext};
