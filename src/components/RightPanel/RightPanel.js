import React from 'react'

import styled from "styled-components"

const RightPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 5px;
`

const BirthdayBar = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    border: 1px solid;
`

const RightPanelAdBox = styled.div`
    display: flex;
    height: 200px;
    border: 1px solid;
    margin-top: 5px;
`

const RightPanel = () => {
    return (
        <RightPanelWrapper>
            <BirthdayBar>
                BirthdayBar
            </BirthdayBar>
            <RightPanelAdBox>
                AdBox
            </RightPanelAdBox>
            LeftPanelWrapper
        </RightPanelWrapper>
    )
}

export default RightPanel
