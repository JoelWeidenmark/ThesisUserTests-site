import React, {useContext, useEffect, useState} from 'react'
import {TaskContext} from "../../context/TaskContext"
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowCircleLeft  } from "@fortawesome/free-solid-svg-icons";


const SpinToRight = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const SpinToLeft = keyframes`
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(0deg);
  }
`;


const TaskWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    overflow: scroll;
    justify-content: center;
    align-items: center;
`
const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.fbBorderGray};
    background-color: ${props => props.theme.fbLightGray};
    padding: 5px;
    border-radius: 5px;
`


const Task = styled.div`
    font-size: 0.8rem;
    border-radius: 5px;
    width: 100%;
    border: 1px solid ${props => props.theme.fbBorderGray};
    background-color: ${
        props => props.complete ?
        'rgb(11, 252, 3)' : 'white'
    };
    margin-bottom: 10px;
    padding: 5px;
`
const OpenMenuWrapper = styled.div`
    height: 40px;
    width: 40px;
    cursor: pointer;
    font-size: 2.5rem;
    display:flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.fbLightBlue};
    animation: ${props => props.Open ? SpinToRight : SpinToLeft} 1s;
    animation-fill-mode: forwards;
`

const LegendWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 0.7rem;
    margin-bottom: 10px;
    >span{
        padding-left: 2px;
    }
`

const LegendBlob = styled.div`
    background-color: ${props => props.IsGreen ? 'rgb(11, 252, 3)' : 'white'};
    margin-left: ${props => props.IsGreen ? '0px' : '10px'};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.fbBorderGray}
`

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    font-size: 0.8rem;
    margin-top: 5px;
    margin-bottom: 15px;
    color: ${props => props.theme.fbTextGray}
`
const HeadlineWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;
    color: ${props => props.theme.fbTextGray}
`

const StartButton = styled.div`
    height: 30px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.fbBlue};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    color: white;
    margin-bottom: 15px;
    :hover{
        background-color: ${props => props.theme.fbLightBlue};
        cursor: pointer;
    } 
`

const Tasks = () => {

    const {taskList, isOpen, setIsOpen, checkItem} = useContext(TaskContext);

    const openClose = () => {
        console.log("RUNNING")
        setIsOpen(!isOpen);
    }

    return (
        <TaskWrapper>
            {isOpen ?
                <OpenMenuWrapper Open onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                </OpenMenuWrapper>
                :
                <OpenMenuWrapper onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                </OpenMenuWrapper>
            }
            <ItemsWrapper>
                <HeadlineWrapper>
                    Hello and Welcome!
                </HeadlineWrapper>
                <TextWrapper>
                     Complete the following tasks from 1 to 8 <br/>Click the arrow to hide or show the tasks
                </TextWrapper>
                <StartButton onClick={() => checkItem(1)}>
                    Start!
                </StartButton>
                <LegendWrapper>
                    <LegendBlob IsGreen/><span>= Completed</span>
                    <LegendBlob/><span>= Uncompleted</span>
                </LegendWrapper>
                {
                    taskList.Tasks.map((item, iter) =>(
                        item.IsFinished ?
                        <Task complete key={iter}>{(iter + 1) + " - " + item.Text}</Task>
                        : <Task key={iter}>{(iter + 1) + " - " + item.Text}</Task>
                    ))
                }
            </ItemsWrapper>
        </TaskWrapper>
    )
}

export default Tasks
