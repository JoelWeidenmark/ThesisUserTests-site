import React from 'react'

import styled from "styled-components"

const RightPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`

const BirthdayBar = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    border: 1px solid;
`
/*
const RightPanelAdBox = styled.div`
    display: flex;
    height: 200px;
    border: 1px solid;
    margin-top: 5px;
`*/

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
                BirthdayBar
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
