import React from 'react'

import styled from "styled-components"
import Birthday from "../Birthday/Birthday"

const RightPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
    position: -webkit-sticky;
    position: sticky;
    top: 40px;
`

const BirthdayBar = styled.div`
    display: flex;
    flex-direction: row;
`

const AdWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 5px;
    border: 1px solid ${props => props.theme.fbBorderGray};
    background-color: ${props => props.theme.fbWhite};
    border-radius: 5px;
    padding: 5px;
`

const RightPanelAdBox = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.fbBorderGray};

    >img{
        width: 100%;
    }
`

const RightPanel = () => {
    return (
        <RightPanelWrapper>
            <BirthdayBar>
                <Birthday>

                </Birthday>
            </BirthdayBar>
            <AdWrapper>
                <RightPanelAdBox>
                    <img src={require(`../../images/adRedbull.jpg`)}></img>
                </RightPanelAdBox>
            </AdWrapper>
        </RightPanelWrapper>
    )
}

export default RightPanel
