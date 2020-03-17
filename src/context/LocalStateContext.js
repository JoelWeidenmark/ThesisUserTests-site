import React, {useContext, useState, createContext} from 'react'
import {ContextInitState} from "./ContextInitState";


//const ContextProvider = createContext(ContextInitState) 
const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function PostsStateProvider({children}){
    const [postsState, setPostsState] = useState(ContextInitState)

    return(
        <LocalStateProvider value={{postsState}}>
            {children}
        </LocalStateProvider>
    )
}


export {PostsStateProvider, LocalStateContext};
