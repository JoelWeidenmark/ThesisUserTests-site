import React, {useState, createContext, useEffect} from 'react'
import {TaskInitState} from "./TaskInitState";

const TaskContext = createContext(TaskInitState);
const TaskContextProvider = TaskContext.Provider;

const TaskStateProvider = ({children}) => {

    
    const [taskList, setTaskList] = useState(TaskInitState)
    const [isOpen, setIsOpen] = useState(true)
    
    const checkItem = (itemNum) => {
        setTaskList(
            {Tasks: taskList.Tasks.map((item) =>(
                item.Num == itemNum ? {...item, IsFinished: true} : item
            ))
            } 
        )
    }

    return(
        <TaskContextProvider value={{taskList, checkItem, isOpen, setIsOpen}}>
            {children}
        </TaskContextProvider>
    )
}

export {TaskStateProvider, TaskContext}